import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ClientData, profileUpdateReq, autoCompletableCategory, CountryData, ClientUpdateReq } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CountryDB } from 'app/shared/helpers/countries';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { AuthenticationService } from 'app/views/sessions/authentication.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  animations: egretAnimations,
})
export class AccountSettingsComponent implements OnInit {

  public countries;
  filteredCountries: Observable<string[]>;
  public selectedCountry;

  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });

  public clientId;
  public url;
  imgBaseURL = 'http://localhost:10000/api/downloads/client/';

  public accountSettingsForm: FormGroup;
  filteredOptions: Observable<string[]>;


  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private errDialog: AppErrorService,
    public snackBar: MatSnackBar,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    let currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;
    this.buildItemForm();
    this.getClient();
    this.getCountry();
  }

  buildItemForm() {
    this.accountSettingsForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      profilePic: [''],
      contactNo: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  getClient() {
    this.profileService.getClient(this.clientId).subscribe(successResp => {
      let data = successResp.content;
      this.accountSettingsForm.patchValue({
        name: data.name,
        description: data.description,
        contactNo: data.primaryContactNo,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country != null ? data.country.name : ''
      });
      this.selectedCountry = data.country != null ? data.country.id : '';
      this.onBlurCountry();
      getBase64ImageFromUrl(this.imgBaseURL + this.clientId)
        .then(result => this.url = result)
        .catch(err => console.error(err));
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }


  getCountry() {
    this.profileService.getCountry().subscribe(successResp => {
      this.countries = successResp.content;

      this.filteredCountries = this.accountSettingsForm.get("country").valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }


  submit() {
    const country: CountryData = new CountryData(this.selectedCountry);
    const req: ClientUpdateReq = new ClientUpdateReq(
      this.accountSettingsForm.get('name').value,
      this.accountSettingsForm.get('description').value,
      this.url, this.accountSettingsForm.get('contactNo').value,
      this.accountSettingsForm.get('addressLine1').value,
      this.accountSettingsForm.get('addressLine2').value,
      this.accountSettingsForm.get('city').value,
      this.accountSettingsForm.get('state').value,
      this.accountSettingsForm.get('zipCode').value,
      country
    );

    this.profileService.updateClientDetails(this.clientId, req).subscribe(
      response => {
        this.snack.open("Client Details Updated!", "OK", { duration: 4000 });
      },
      error => {
        this.loader.close();
        this.errDialog.showError(error);
      }
    );
  }



  //  ----------------------- Account Setting ---------------------------------------------------------

  private _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
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
    this.accountSettingsForm.controls['profilePic'].setValue('')
  }

  onBlurCountry(): void {
    let value = this.accountSettingsForm.get("country").value;
    let status = true;
    this.countries.forEach(element => {
      if (element.name === value) {
        this.selectedCountry = element.id;
        status = false;
      }
    });

    if (status) {
      this.selectedCountry = null;
      this.accountSettingsForm.get("country").setValue("");
    }
  }
  //  -------------------------------------------------------------------------------------------------
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
