import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ClientService } from '../../../../client.service';
import { ClientData, AuthorityData } from 'app/model/ClientModel.model';


@Component({
  selector: 'app-role-table-popup',
  templateUrl: './role-table-popup.component.html'
})
export class RoleTablePopupComponent implements OnInit {
  //Raveen : need to implement a custom directive for the pattern validation
  //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';

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
    if (this.predefined === 'true') {
      this.createAdminAuthorityComponentList(this.data.adminRoleAuthorities);
    } else {
      roleData.authorities.forEach(authority => {
        if (authority.type === 'U' || authority.type === 'D') {
          this.selectedAuthorities.push(authority.id);
        }
      });
      this.createUserAuthorityComponentList(this.data.adminRoleAuthorities);
    }
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

  createAdminAuthorityComponentList(data) {
    let roleData = JSON.parse(JSON.stringify(data));

    this.clientService.getAllUserAuthority().subscribe(response => {
      this.allAuthority = response.content;

      this.allAuthority.forEach(section => {
        section.authorities.forEach(authority => {

          if (authority.type === 'D' && authority.code !== 'cm-a') {
            authority['sectionId'] = section.id;
            this.allDisplayAuthority.push(authority)
          }
        });
      });

      roleData.forEach(section => {
        section.authorities.forEach(authority => {
          if (authority.type === 'D') {
            authority['sectionId'] = section.id;
            this.adminRoleDisplayAuthority.push(authority);
            this.newDisplayAuthority.push(authority);
          }
        });
      });

      this.allDisplayAuthority.forEach(authority => {
        let status = false;
        const index = this.adminRoleDisplayAuthority.findIndex(x => x.id === authority.id);
        if (index >= 0) {
          status = true;
        }
        authority['checked'] = status;
      });

    });

    this.adminComponentList = this.allDisplayAuthority;
    console.log('-------------------------------------- adminComponentList', this.adminComponentList);

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

    if (this.predefined === 'true') {

      // update removedDisplayAuthority array -----------------------------------------------------------------
      this.adminRoleDisplayAuthority.forEach(authority => {
        if (this.newDisplayAuthority.findIndex(x => x.id === authority.id) < 0) {
          this.removedDisplayAuthority.push(new AuthorityData(authority.id));
        }
      });
      // ------------------------------------------------------------------------------------------------------


      // Add Authorities to selectedAuthorities array by selected Display Authorities -------------------------
      this.newDisplayAuthority.forEach(newAuthority => {
        this.selectedAuthorities.push(newAuthority.id);
        this.allAuthority.forEach(section => {
          if (newAuthority.sectionId === section.id) {
            section.authorities.forEach(authority => {
              if (!this.selectedAuthorities.includes(authority.id)) {
                this.selectedAuthorities.push(authority.id);
              }
            });
          }
        });
      });
      // ------------------------------------------------------------------------------------------------------


      // Add Admin And Common Authorities ---------------------------------------------------------------------
      this.commonAndAdminAuthorities.forEach(authority => {
        this.selectedAuthorities.push(authority.id);
      });
      // ------------------------------------------------------------------------------------------------------



    } else {

      // Add Common Authorities --------------------------------------------------------------------------------
      this.commonAndAdminAuthorities.forEach(authority => {
        if (authority.type === 'C') {
          this.selectedAuthorities.push(authority.id);
        }
      });
      // ------------------------------------------------------------------------------------------------------

    }


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

  onChangeAdminRole(authority, isChecked: boolean) {
    const dataArray = <FormArray>this.authoritiesFormGroup.controls.data;
    // console.log('------------------------------------------ dataArray', dataArray);

    if (isChecked) {
      dataArray.push(new FormControl(authority.code));
      // this.selectedAuthorities.push(authority.id);
      this.newDisplayAuthority.push(authority);
    } else {
      const index = dataArray.controls.findIndex(x => x.value === authority.code);
      dataArray.removeAt(index);
      const i = this.newDisplayAuthority.findIndex(y => y.id === authority.id);
      this.newDisplayAuthority.splice(i, 1);
      // const j = this.selectedAuthorities.findIndex(y => y === authority.id);
      // this.selectedAuthorities.splice(j, 1);
    }
  }

}
