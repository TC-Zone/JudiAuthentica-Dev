import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatCheckboxChange } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { egretAnimations } from "../../../../../../shared/animations/egret-animations";
import { GlobalVariable } from "../../../../../../shared/helpers/global-variable";
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { autoCompletableCategory } from 'app/model/ClientModel.model';


@Component({
  selector: 'app-user-create-popup',
  templateUrl: './user-create-popup.component.html',
  animations: egretAnimations,
})
export class UserCreatePopupComponent implements OnInit {

  private globalVariable: GlobalVariable = new GlobalVariable();
  private license = this.globalVariable.client.license;
  private regex = this.globalVariable.validators.regex;
  private confirmPasswordStatus = this.globalVariable.common.message.confirmPasswordStatus;

  private userFormGroup: FormGroup;
  private categoryFormGroup: FormGroup;
  private communityFormGroup: FormGroup;
  private licenseFormGroup: FormGroup;

  private roles;

  private selectable = true;
  private removable = true;
  private addOnBlur = true;
  private separatorKeysCodes: number[] = [ENTER, COMMA];
  private categoryCtrl = new FormControl();
  private allCategories: autoCompletableCategory[] = [];
  private filteredCategories: Observable<autoCompletableCategory[]>;
  private selectedCategories: autoCompletableCategory[] = [];

  allCommunities = [];
  selectedCommunities = [];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<UserCreatePopupComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.filteredCategories = this.categoryCtrl.valueChanges
      .pipe(
        startWith(null),
        map(category => category ? this._filterCategories(category) : this.allCategories.slice())
      );
  }

  ngOnInit() {
    this.roles = this.data.roles;
    this.allCategories = JSON.parse(JSON.stringify(this.data.category));
    this.allCommunities = JSON.parse(JSON.stringify(this.data.community));
    this.buildItemForm()
  }

  buildItemForm() {

    this.userFormGroup = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(this.regex._UserName)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.regex._Password)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.regex._Email)]),
      role: new FormControl('', Validators.required)
    });
    this.categoryFormGroup = this.fb.group({
      category: this.categoryCtrl
    });
    this.communityFormGroup = this.fb.group({
      username: ['', Validators.required]
    });
  }

  submit() {
    let forms = [this.userFormGroup.value, this.selectedCategories, this.selectedCommunities];
    this.userFormGroup.reset();
    this.dialogRef.close(forms);
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      // const value = event.value;

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

  // Community checkbox onchange event
  onChange(event: MatCheckboxChange): void {
    if (event.checked) {
      this.allCommunities.forEach((item) => {
        if (item.id === event.source.value) {
          this.selectedCommunities.push(item);
        }
      });
    } else {
      this.selectedCommunities.forEach((item, index) => {
        if (item.id === event.source.value) {
          this.selectedCommunities.splice(index, 1);
        }
      });
    }
  }

  private _filterCategories(value: string): autoCompletableCategory[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.name.toLowerCase().indexOf(filterValue) === 0);
  }

}

