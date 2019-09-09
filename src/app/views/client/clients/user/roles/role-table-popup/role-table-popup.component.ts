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

  private clientID;
  private predefined;
  private isNew;

  private allAuthority = [];
  private allDisplayAuthority = [];
  private adminRoleDisplayAuthority = [];
  private newDisplayAuthority = [];
  private removedDisplayAuthority = [];
  private commonAndAdminAuthorities = [];

  private selectedAuthorities = [];
  private componentList = [];
  private adminComponentList = [];

  // TEMPORARY : SET USER DISPLAY AUTH DEFAULT
  private userDisplayAuthority;


  private authoritiesFormGroup: FormGroup;
  private roleFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<RoleTablePopupComponent>,
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

  createAdminAuthorityComponentList(data) {
    let roleData = JSON.parse(JSON.stringify(data));

    this.clientService.getAllUserAuthority().subscribe(response => {
      this.allAuthority = response.content;

      this.allAuthority.forEach(section => {
        section.authorities.forEach(authority => {
          console.log('--------------------------- authority', authority);


          if (
            authority.type === 'D' &&
            authority.code !== 'cm-a' &&
            // TEMPORARY : SET USER DISPLAY AUTH DEFAULT
            authority.code !== 'um-a'
          ) {
            authority['sectionId'] = section.id;
            this.allDisplayAuthority.push(authority)
          }

        });
      });

      roleData.forEach(section => {
        section.authorities.forEach(authority => {

          authority['sectionId'] = section.id;

          // TEMPORARY : SET USER DISPLAY AUTH DEFAULT
          if (authority.code === 'um-a') {
            this.userDisplayAuthority = authority;
          } else

            if (authority.type === 'D') {
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

    // console.log('--------------------------------------------- this.componentList', this.componentList);
    console.log('--------------------------------------------- this.selectedAuthorities', this.selectedAuthorities);


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

      // TEMPORARY : SET USER DISPLAY AUTH DEFAULT
      this.newDisplayAuthority.push(this.userDisplayAuthority);

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

      console.log('--------------------------- this.selectedAuthorities', this.selectedAuthorities);

    } else {

      // Add Common Authorities --------------------------------------------------------------------------------
      this.commonAndAdminAuthorities.forEach(authority => {
        if (authority.type === 'C') {
          console.log(authority.name);
          
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

}
