import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatCheckboxChange } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { GlobalVariable } from "../../../../shared/helpers/global-variable";
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

  public globalVariable: GlobalVariable = new GlobalVariable();
  public license = this.globalVariable.client.license;
  public regex = this.globalVariable.validators.regex;

  public userFormGroup: FormGroup;
  public categoryFormGroup: FormGroup;
  public communityFormGroup: FormGroup;
  public licenseFormGroup: FormGroup;
  // public formStatus = false;

  public roles;

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  allCategories: autoCompletableCategory[] = [];
  filteredCategories: Observable<autoCompletableCategory[]>;
  selectedCategories: autoCompletableCategory[] = [];

  allCommunities = [];
  selectedCommunities = [];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserCreatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
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

    // this.userFormGroup = this.fb.group({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    //   email: new FormControl(''),
    //   role: new FormControl('')
    // });

    this.userFormGroup = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\d$@$!%*?&].{7,}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
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


