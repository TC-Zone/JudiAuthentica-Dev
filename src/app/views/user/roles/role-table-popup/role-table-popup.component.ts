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
    let displayAuthoritySection = { name: "Display Authority", authorities: [] };
    roleData.forEach(section => {
      section.authorities.forEach((authority, index) => {
        if (authority.type === 'D' || authority.type === 'U') {
          let status = false;
          if (this.selectedAuthorities.includes(authority.id)) {
            status = true;
          }
          authority['checked'] = status;

          if (authority.type === 'D') {
            displayAuthoritySection.authorities.push(authority);
            section.authorities.splice(index, 1);
          }
        } else {
          console.log(authority);
          section.authorities.splice(index, 1);
        }
      });
    });

    roleData.splice(0, 0, displayAuthoritySection);
    this.componentList = roleData;
    console.log('-------------------------------------- componentList', this.componentList);
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
    // console.log('------------------------------------------ dataArray', dataArray);

    if (isChecked) {
      dataArray.push(new FormControl(authority.code));
      this.selectedAuthorities.push(authority.id);
    } else {
      const index = dataArray.controls.findIndex(x => x.value === authority.code);
      dataArray.removeAt(index);
      const i = this.selectedAuthorities.findIndex(y => y === authority.id);
      this.selectedAuthorities.splice(i, 1);
    }
  }

}
