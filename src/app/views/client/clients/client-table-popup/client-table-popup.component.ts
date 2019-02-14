import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-client-table-popup',
  templateUrl: './client-table-popup.component.html'
})
export class ClientTablePopupComponent implements OnInit {
  public itemForm: FormGroup;
  public formStatus = false;
  //Raveen : need to implement a custom directive for the pattern validation
  //public codeRegex = '/^-?[0-9]+(\.[0-9]*){0,1}$/g';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientTablePopupComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {

    if(item.name === undefined){
      this.formStatus = true;
    }
    
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      description: [item.description || '', Validators.required],
      username: [''],
      email: ['']
      // username: ['', Validators.required],
      // email: ['', Validators.required]
    })
    
  }

  submit() {
    this.dialogRef.close(this.itemForm.value)
  }
}
