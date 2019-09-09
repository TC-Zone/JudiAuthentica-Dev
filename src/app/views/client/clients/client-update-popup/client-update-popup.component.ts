import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CountryDB } from "../../../../shared/helpers/countries";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { ClientService } from '../../client.service';
import { GlobalVariable } from 'app/shared/helpers/global-variable';


@Component({
  selector: 'app-client-update-popup',
  templateUrl: './client-update-popup.component.html',
  animations: egretAnimations,
})
export class ClientUpdatePopupComponent implements OnInit {

  private globalVariable: GlobalVariable = new GlobalVariable();
  private regex = this.globalVariable.validators.regex;
  
  private countries;
  private filteredCountries: Observable<string[]>;
  private selectedCountry;

  private itemForm: FormGroup;
  private formStatus = false;
  private url;
  private imgBaseURL : string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ClientUpdatePopupComponent>,
    private clientService : ClientService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.imgBaseURL = this.clientService.imageUrl;
    this.countries = this.data.country;
    console.log(this.countries);

    this.buildItemForm(this.data.payload)

    this.filteredCountries = this.itemForm.get("country").valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  buildItemForm(item) {

    console.log(item);

    let country = null;
    if (item.country) {
      country = item.country.name;
      this.selectedCountry = item.country.id;
    }

    this.itemForm = this.fb.group({
      name: [item.name || '', [Validators.required, Validators.pattern(this.regex._Letter)]],
      description: [item.description || '', Validators.required],
      profilePic: [''],
      contactNo: [item.primaryContactNo || '', Validators.required],
      addressLine1: [item.addressLine1 || '', Validators.required],
      addressLine2: [item.addressLine2 || '', Validators.required],
      city: [item.city || '', Validators.required],
      state: [item.state || '', Validators.required],
      zipCode: [item.zipCode || ''],
      country: [country || '', Validators.required]
    })

    getBase64ImageFromUrl(this.imgBaseURL + item.id)
      .then(result => this.url = result)
      .catch(err => console.error(err));
  }

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  submit() {
    let forms = [this.itemForm.value, this.url, this.selectedCountry];
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
      if (element.name === value) {
        this.selectedCountry = element.id;
        status = false;
      }
    });

    if (status) {
      this.selectedCountry = null;
      this.itemForm.get("country").setValue("");
    }
  }

}


async function getBase64ImageFromUrl(imageUrl) {
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  })
}
