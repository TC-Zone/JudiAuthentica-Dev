import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ClientData, LicenseUpdateReq, ClientCategoryUpdateReq, CategoryData, autoCompletableCategory } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { egretAnimations } from "app/shared/animations/egret-animations";
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CountryDB } from 'app/shared/helpers/countries';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-profile-license',
  templateUrl: './profile-license.component.html'
})
export class ProfileLicenseComponent implements OnInit {

  // public globalVariable: GlobalVariable = new GlobalVariable();
  // public license = this.globalVariable.client.license;
  // public regex = this.globalVariable.validators.regex;

  public licenseFormGroup: FormGroup;
  public formStatus = false;
  public url;
  public oldestValue = 0;
  public clientId;
  public license;
  public getItemSub: Subscription;

  public categoryFormGroup: FormGroup;

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  allCategories: autoCompletableCategory[] = [];
  filteredCategories: Observable<autoCompletableCategory[]>;
  selectedCategories: autoCompletableCategory[] = [];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    private profileService: ProfileService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private snack: MatSnackBar
  ) { 
    
    this.filteredCategories = this.categoryCtrl.valueChanges
      .pipe(
        startWith(null),
        map(category => category ? this._filterCategories(category) : this.allCategories.slice())
      );
  }


  ngOnInit() {
    let currentuser = JSON.parse(localStorage.getItem('currentUser'));
    this.clientId = currentuser.userData.client.id;
    this.buildItemForm()
    this.getCategory();
    this.getClientCategory();

    // this.buildItemForm(this.data.payload.license)
  }

  buildItemForm() {

    this.licenseFormGroup = this.fb.group({
      tagCount: ['', Validators.required],
      userCount: ['', Validators.required],
      communityCount: ['', Validators.required],
      feedbackCount: ['', Validators.required],
      eventCount: ['', Validators.required],
      promoCount: ['', Validators.required]
    });

    this.categoryFormGroup = this.fb.group({
      category: this.categoryCtrl
    });


    this.getClient();
  }

  getCategory() {
    this.profileService.getCategory().subscribe(successResp => {
      this.allCategories = successResp.content;
    },
      error => {
        this.errDialog.showError(error);
      }
    );
  }
  
  getClientCategory() {
    this.profileService.getClientCategories(this.clientId).subscribe(successResp => {
      successResp.content.forEach(element => {
        this.addSelectedCategory(element.id);
      });
    },
      error => {
        this.errDialog.showError(error);
      });
  }

  getClient() {
    this.getItemSub = this.profileService.getClient(this.clientId).subscribe(successResp => {

      this.license = successResp.content.license;

      this.licenseFormGroup.patchValue({
        tagCount: this.license.tagCount,
        userCount: this.license.userCount,
        communityCount: this.license.communityCount,
        feedbackCount: this.license.feedbackCount,
        eventCount: this.license.eventCount,
        promoCount: this.license.promoCount
      });

    },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }


  setOldValue() {
    this.oldestValue = this.licenseFormGroup.controls['communityCount'].value;
  }

  validateLicense() {
    let form = this.licenseFormGroup;
    if (form.controls['communityCount'].value !== '') {
      let value = form.controls['communityCount'].value;
      let diff;

      if (value > this.oldestValue) {
        diff = value - this.oldestValue;
        form.controls['feedbackCount'].setValue(+(form.get('feedbackCount').value) + diff);
        form.controls['eventCount'].setValue(+(form.get('eventCount').value) + diff);
        form.controls['promoCount'].setValue(+(form.get('promoCount').value) + diff);
      }
    } else {
      form.controls['communityCount'].setValue(1)
      form.controls['feedbackCount'].setValue(1)
      form.controls['eventCount'].setValue(1)
      form.controls['promoCount'].setValue(1)
    }
  }

  setDefaultValue(control) {
    let form = this.licenseFormGroup;
    if (form.controls[control].value === '') {
      form.controls[control].setValue(1);
    }
  }

  updateLicense() {
    let form = this.licenseFormGroup;
    let clientData: ClientData = new ClientData(this.clientId);
    const req: LicenseUpdateReq = new LicenseUpdateReq(form.get('tagCount').value, form.get('userCount').value, form.get('communityCount').value, form.get('feedbackCount').value, form.get('eventCount').value, form.get('promoCount').value, clientData);

    this.profileService.updateClientLicense(this.license.id, req).subscribe(
      response => {
        this.snack.open("License Data Updated !", "OK", { duration: 4000 });
        // this.getClients();
        // this.clients = response;
        // this.loader.close();
        // this.snack.open("License Data Updated !", "OK", { duration: 4000 });
      },
      error => {
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }




  //  ----------------------- Categoty Setting --------------------------------------------------------


  updateCategory() {
    console.log('---------------------- Category ', this.selectedCategories);

    let categories: CategoryData[] = [];
    this.selectedCategories.forEach(element => {
      categories.push(new CategoryData(element.id));
    });

    const req: ClientCategoryUpdateReq = new ClientCategoryUpdateReq(categories);

    this.loader.open();
    this.profileService.updateClientCategory(this.clientId, req).subscribe(
      response => {
        this.loader.close();
        this.snack.open("Client Category Updated!", "OK", { duration: 4000 });
      },
      error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
      }
    );
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // if we need to add custom texts as Chips,
      // Add our category
      // if ((value || '').trim()) {
      //   this.categories.push(value.trim());
      // }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.categoryCtrl.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addSelectedCategory(event.option.value);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  addSelectedCategory(id) {
    this.allCategories.forEach((item, index) => {
      if (item.id === id) {
        this.selectedCategories.push(item);
        this.allCategories.splice(index, 1);
      }
    });
  }

  remove(category: autoCompletableCategory): void {
    this.selectedCategories.forEach((item, index) => {
      if (item.id === category.id) {
        this.allCategories.push(category);
        this.selectedCategories.splice(index, 1);
      }
    });
  }

  private _filterCategories(value: string): autoCompletableCategory[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.name.toLowerCase().indexOf(filterValue) === 0);
  }

  //  -------------------------------------------------------------------------------------------------


}
