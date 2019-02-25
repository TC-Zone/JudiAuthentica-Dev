import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ClientService } from '../../client.service';


@Component({
  selector: 'app-role-table-popup',
  templateUrl: './role-table-popup.component.html'
})
export class RoleTablePopupComponent implements OnInit {
  public authoritiesFormGroup: FormGroup;
  public roleFormGroup: FormGroup;
  //Raveen : need to implement a custom directive for the pattern validation
  //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
  public componentList = [];
  public numberOfComponent = this.componentList.length - 1;
  public selectedAuthorities: Array<any> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RoleTablePopupComponent>,
    private fb: FormBuilder,
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.buildRoleForms(this.data.payload);
    this.buildauthoritiesForm();
    this.getAllAuthorities();
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

  /*
  * Form Data Submit
  * Created by Prasad Kumara
  * 14/02/2019
  */
  submit() {
    const roleFormValue = this.roleFormGroup.value;
    const roleData = {
      name: roleFormValue.name,
      description: roleFormValue.description,
      authorities: this.selectedAuthorities
    };
    this.dialogRef.close(roleData);
  }

  /*
  * Check box onchange function for get selected check box value
  * Created by Prasad Kumara
  * 14/02/2019
  */
  onChange(id: String, name: String, auth_key: String, isChecked: boolean) {
    const dataArray = <FormArray>this.authoritiesFormGroup.controls.data;
    console.log('--------- role update onchange -------------');
    if (isChecked) {
      dataArray.push(new FormControl(auth_key));
      const tempJson = {
        id: id
      };
      console.log(id, auth_key);
      this.selectedAuthorities.push(tempJson);
    } else {
      const index = dataArray.controls.findIndex(x => x.value === auth_key);
      dataArray.removeAt(index);
      // for (let i = 0; i < this.selectedAuthorities.length; i++) {
      //   if (this.selectedAuthorities[i].id === id) {
          const i = this.selectedAuthorities.findIndex(y => y.id === id);
          console.log(id, auth_key, i);
          this.selectedAuthorities.splice(i, 1);
          // break;
      //   }
      // }
    }
  }

  /*
  * Set Selected role authorities when update popup window open
  * Created by Prasad Kumara
  * 14/02/2019
  */
  setSelectedRoleAuthorities() {
    if (this.data.payload.hasOwnProperty('authorities')) {
      const temList = this.componentList;
      temList.forEach(element => {
        element.data.forEach(data => {
          if (data.checked) {
            const tempJson = {
              id: data.id
            };
            this.selectedAuthorities.push(tempJson);
          }
        });
      });
      console.log('-------------- setSelectedRoleAuthorities -------------------');
      console.log(this.selectedAuthorities);
    }
  }

  /*
  * Get All Authorities
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getAllAuthorities() {
    this.clientService.getAllAuthorities()
      .subscribe(
        response => {
          this.createComponentArray(response.content);
        }
      );
  }

  /*
  * Create Componet tab view data array
  * Created by Prasad Kumara
  * 14/02/2019
  */
  createComponentArray(dataArray: any) {
    dataArray.forEach(data => {
      const name = this.getModuleName(data.code);
      if (name === 'Clients') {
        const i = this.componentList.findIndex(x => x.moduleName === name);
        const status =  this.setSelectedAuthorities(data.id);
        if (i < 0) {
          const tempdata = data;
          tempdata['checked'] = status;
          this.componentList.push({
            moduleName: name,
            data: [tempdata]
          });
        }else {
          const tempdata = data;
          tempdata['checked'] = status;
          this.componentList[i].data.push(tempdata);
        }
      }
    });
    // console.log('--------------- component list --------------------');
    // console.log(this.componentList);
    this.setSelectedRoleAuthorities();
  }

  /*
  * Get module name according to the code
  * Created by Prasad Kumara
  * 14/02/2019
  */
  getModuleName(code): any {
    const x = code.split('-');
    if (x[0] === 'pc' || x[0] === 'pur' || x[0] === 'pu') {
      return 'Clients';
    }
    return null;
  }

  /*
  * Set Selected Authorities checke function
  * Created by Prasad Kumara
  * 14/02/2019
  */
  setSelectedAuthorities(id): boolean {
    let status = false;
    if (this.data.payload.hasOwnProperty('authorities')) {
      const dataArray = this.data.payload.authorities;
      dataArray.forEach(elements => {
        if (elements.id === id) {
          status = true;
        }
      });
    }
    return status;
  }

}
