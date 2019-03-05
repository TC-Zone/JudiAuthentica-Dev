import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CountryDB } from "../../../../shared/helpers/countries";
import { egretAnimations } from "../../../../shared/animations/egret-animations";


@Component({
  selector: 'app-client-update-popup',
  templateUrl: './client-update-popup.component.html',
  animations: egretAnimations,
})
export class ClientUpdatePopupComponent implements OnInit {

  public countryDB: CountryDB = new CountryDB();
  public countries = this.countryDB.countries;
  filteredOptions: Observable<string[]>;

  public itemForm: FormGroup;
  public formStatus = false;
  public url;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientUpdatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildItemForm(this.data.payload)
  }
  buildItemForm(item) {

    console.log(item);

    let country = null;
    if(item.country){
      country = item.country.name;
    }
    this.url = item.clientLogo;
    console.log(this.url);
    
    
    this.itemForm = this.fb.group({
      name: [item.name || '', Validators.required],
      description: [item.description || '', Validators.required],
      profilePic: ['test', Validators.required],
      contactNo: [item.primaryContactNo || '', Validators.required],
      addressLine1: [item.addressLine1 || '', Validators.required],
      addressLine2: [item.addressLine2 || '', Validators.required],
      city: [item.city || '', Validators.required],
      state: [item.state || '', Validators.required],
      zipCode: [item.zipCode || '', Validators.required],
      country: [country || '', Validators.required]
    })

    this.filteredOptions = this.itemForm.get("country").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  submit() {
    let surl: String = this.url;
    // surl.slice(24)
    let forms = [this.itemForm.value,this.url];
    this.dialogRef.close(forms)
  }


  // File uploader validation and upload
  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {

      let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
      let pattern = /image-*/;
      let reader = new FileReader();
      if (!file.type.match(pattern)) {
        this.snackBar.open(
          "Invalid Format!",
          "close",
          { duration: 2000 }
        );
        return;
      }
      reader.onload = (event: any) => {
        this.url = event.target.result;
        console.log(this.url);
        
      };

      reader.readAsDataURL(file);

    } else {
      this.snackBar.open(
        "Can't upload",
        "close",
        { duration: 2000 }
      );
    }

  }

  removeSelectedImg() {
    this.url = null;
  }

  onBlurCountry(): void {
    let value = this.itemForm.get("country").value;
    let status = true;
    this.countries.forEach(element => {
      if(element.name === value){
        status = false;
      }
    });

    if (status) {
      this.itemForm.get("country").setValue("");
    }
  }

}
