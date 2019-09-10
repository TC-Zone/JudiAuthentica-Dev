import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { ClientCategoryUpdateReq, CategoryData, autoCompletableCategory } from 'app/model/ClientModel.model';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';
import { MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { AuthenticationService } from 'app/views/sessions/authentication.service';
import { AppWarningService } from 'app/shared/services/app-warning/app-warning.service';

@Component({
  selector: 'app-profile-license',
  templateUrl: './profile-license.component.html'
})
export class ProfileLicenseComponent implements OnInit {

  // private formStatus = false;
  // private url;
  private oldestValue = 0;
  private clientId;
  private license;

  private categoryFormGroup: FormGroup;

  private selectable = true;
  private removable = true;
  private addOnBlur = true;
  private separatorKeysCodes: number[] = [ENTER, COMMA];
  private categoryCtrl = new FormControl();
  private allCategories: autoCompletableCategory[] = [];
  private filteredCategories: Observable<autoCompletableCategory[]>;
  private selectedCategories: autoCompletableCategory[] = [];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(

    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private profileService: ProfileService,
    private errDialog: AppErrorService,
    private loader: AppLoaderService,
    private snack: MatSnackBar,
    private authService: AuthenticationService,
    private appWarningService: AppWarningService

  ) { }


  ngOnInit() {

    let currentUser = this.authService.getLoggedUserDetail();
    this.clientId = currentUser.userData.client.id;
    this.getCategory();
    this.getClientCategory();
    this.buildItemForm()

  }

  buildItemForm() {

    this.categoryFormGroup = this.fb.group({
      category: this.categoryCtrl
    });

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

    this.profileService.getClientCategories(this.clientId).subscribe(
      successResp => {
        successResp.content.forEach(element => {
          this.addSelectedCategory(element.id);
        });
      },
      error => {
        this.errDialog.showError(error);
      }
    );

  }

  //  ----------------------- Categoty Setting --------------------------------------------------------

  onFocusCategoryDD() {
    this.filteredCategories = this.categoryCtrl.valueChanges
      .pipe(
        startWith(null),
        map(category => category ? this._filterCategories(category) : this.allCategories.slice())
      );
  }

  updateCategory() {
    console.log('---------------------- Category ', this.selectedCategories);

    let categories: CategoryData[] = [];
    this.selectedCategories.forEach(element => {
      categories.push(new CategoryData(element.id));
    });

    const req: ClientCategoryUpdateReq = new ClientCategoryUpdateReq(categories);

    this.loader.open();
    this.profileService.updateClientCategory(this.clientId, req).subscribe(
      () => {
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

    this.profileService.getClientCategoryProductsCount(this.clientId, category.id).subscribe(
      successResp => {

        if (successResp.content > 0) {

          const infoData = {
            title: "Sorry!",
            message:
              "Cannot remove category!</br>" +
              "<small class='text-muted'>You have already assigned " + successResp.content + " product(s) underneath of it.</small>"
          };

          this.appWarningService.showWarning(infoData);

        } else {

          this.selectedCategories.forEach((item, index) => {
            if (item.id === category.id) {
              this.allCategories.push(category);
              this.selectedCategories.splice(index, 1);
            }
          });

        }
      },
      error => {
        this.errDialog.showError(error);
      }
    );


  }

  restCategory() {
    this.allCategories = [];
    this.selectedCategories = [];
    this.getCategory();
    this.getClientCategory();
  }

  private _filterCategories(value: string): autoCompletableCategory[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.name.toLowerCase().indexOf(filterValue) === 0);
  }

  //  -------------------------------------------------------------------------------------------------


}
