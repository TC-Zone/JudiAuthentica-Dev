import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { UserService } from '../../user.service';
import { ClientService } from '../../../client/client.service';
import { AuthorityData, ClientData } from 'app/model/ClientModel.model';


@Component({
  selector: 'app-role-table-popup',
  templateUrl: './role-table-popup.component.html'
})
export class RoleTablePopupComponent implements OnInit {

  public clientID;
  public predefined;
  public isNew;

  public allAuthority = [];
  public allDisplayAuthority = [];
  public adminRoleDisplayAuthority = [];
  public newDisplayAuthority = [];
  public removedDisplayAuthority = [];
  public commonAndAdminAuthorities = [];

  public selectedAuthorities = [];
  public componentList = [];
  public adminComponentList = [];


  public authoritiesFormGroup: FormGroup;
  public roleFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RoleTablePopupComponent>,
    private fb: FormBuilder,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    console.log(this.data);

    this.clientID = this.data.clientID;
    this.predefined = this.data.roleData.predefined;
    this.isNew = this.data.roleData.isNew;
    this.commonAndAdminAuthorities = this.data.commonAndAdminAuthorities;

    if (this.isNew) {
      this.createUserAuthorityComponentList(this.data.adminRoleAuthorities);
    } else {
      this.formatRoleAuthority(this.data.roleData);
    }

    this.buildRoleForms(this.data.roleData);
    this.buildauthoritiesForm();
  }


  formatRoleAuthority(data) {
    let roleData = JSON.parse(JSON.stringify(data));
    roleData.authorities.forEach(authority => {
      if (authority.type === 'U' || authority.type === 'D') {
        this.selectedAuthorities.push(authority.id);
      }
    });
    this.createUserAuthorityComponentList(this.data.adminRoleAuthorities);
  }


  createUserAuthorityComponentList(data) {
    const roleData = JSON.parse(JSON.stringify(data));
    let displayAuthoritySection = { name: "Display Authority", id: 'display_authority', selectAll: false, indeterminateState: false, authorities: [] };

    roleData.forEach(section => {

      let authorities: any[] = [];
      section.authorities.forEach((authority) => {

        if (authority.type === 'D') {
          displayAuthoritySection.authorities.push(authority);
        } else if (authority.type === 'U') {
          authorities.push(authority);
        }
        let status = false;
        if (this.selectedAuthorities.includes(authority.id)) {
          status = true;
        }
        authority['checked'] = status;

      });
      section.authorities = authorities;
      section['selectAll'] = false;
      section['indeterminateState'] = false;
      
    });

    roleData.splice(0, 0, displayAuthoritySection);
    this.componentList = roleData;
    console.log('-------------------------------------- componentList', this.componentList);
    this.checkAllSelect();
  }


  /*
  * Build New Role Form Group
  * Created by Prasad Kumara
  * 14/02/2019
  */
  buildRoleForms(item) {
    this.roleFormGroup = this.fb.group({
      name: [item.name || '', Validators.required],
      description: [item.description || '', Validators.required]
    });
  }

  /*
  * Create New User Role Authorities Form Group
  * Created by Prasad Kumara
  * 14/02/2019
  */
  buildauthoritiesForm() {
    this.authoritiesFormGroup = this.fb.group({
      data: this.fb.array([])
    });
  }


  submit() {

    // Add Common Authorities --------------------------------------------------------------------------------
    this.commonAndAdminAuthorities.forEach(authority => {
      if (authority.type === 'C') {
        this.selectedAuthorities.push(authority.id);
      }
    });
    // ------------------------------------------------------------------------------------------------------



    // create selected authorities (AuthorityData) array ------------------------------------------------------
    let authorities: AuthorityData[] = [];
    this.selectedAuthorities.forEach(authorityID => {
      authorities.push(new AuthorityData(authorityID));
    });
    // --------------------------------------------------------------------------------------------------------


    // create req ---------------------------------------------------------------------------------------------
    const roleFormValue = this.roleFormGroup.value;
    let roleData = {};
    if (this.isNew) {
      roleData = {
        name: roleFormValue.name,
        description: roleFormValue.description,
        authorities: authorities,
        client: new ClientData(this.clientID)
      };
    } else {
      roleData = {
        name: roleFormValue.name,
        description: roleFormValue.description,
        authorities: authorities,
        removedAuthorities: this.removedDisplayAuthority,
        localizedName: ""
      };
    }
    // --------------------------------------------------------------------------------------------------------

    console.log(roleData);

    this.dialogRef.close(roleData);
  }


  onChangeUserRole(authority, isChecked: boolean) {

    const dataArray = <FormArray>this.authoritiesFormGroup.controls.data;
    if (isChecked) {
      dataArray.push(new FormControl(authority.code));
      this.selectedAuthorities.push(authority.id);
      authority.checked = true;
    } else {
      const index = dataArray.controls.findIndex(x => x.value === authority.code);
      dataArray.removeAt(index);
      const i = this.selectedAuthorities.findIndex(y => y === authority.id);
      this.selectedAuthorities.splice(i, 1);
      authority.checked = false;
    }

    this.checkAllSelect();

  }

  
  checkAllSelect() {

    this.componentList.forEach(section => {
      let selectedAuthoritiesCount = 0;
      section.authorities.forEach(authority => {
        if (authority.checked) {
          selectedAuthoritiesCount++;
        }
      });
      if (section.authorities.length === selectedAuthoritiesCount) {
        section.selectAll = true;
        section.indeterminateState = false;
      } else if (selectedAuthoritiesCount === 0) {
        section.selectAll = false;
        section.indeterminateState = false;
      } else {
        section.selectAll = false;
        section.indeterminateState = true;
      }
    });

  }
  
  onChangeSelectAll(id, isChecked) {

    this.componentList.forEach(section => {
      if (section.id === id) {
        section.authorities.forEach(authority => {
          this.onChangeUserRole(authority, isChecked);
        });
      }
    });
    this.checkAllSelect();

  }

}
