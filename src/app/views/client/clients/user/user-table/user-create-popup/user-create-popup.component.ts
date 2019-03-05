import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { egretAnimations } from "../../../../../../shared/animations/egret-animations";
import { GlobalVariable } from "../../../../../../shared/helpers/global-variable";
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ENTER, COMMA } from '@angular/cdk/keycodes';


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
  public adminFormGroup: FormGroup;
  public licenseFormGroup: FormGroup;
  // public formStatus = false;

  public url;
  public roles;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Lifestyle'];
  allCategories: string[] = ['SNKRS Launch Calendar', 'Lifestyle', 'Running', 'Training & Gym', 'Basketball', 'Jordan', 'Football', 'Soccer', 'Baseball', 'Golf', 'Skateboarding', 'Tennis', 'Boots'];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserCreatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
  }

  ngOnInit() {
    this.roles = this.data.roles;
    this.buildItemForm()
  }

  buildItemForm() {

    this.userFormGroup = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    });

    // this.userFormGroup = this.fb.group({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   role: new FormControl('', Validators.required)
    // });
    this.categoryFormGroup = this.fb.group({
      category: this.categoryCtrl
    });
    this.adminFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.licenseFormGroup = this.fb.group({
      tagCount: ['', [Validators.required, Validators.max(this.license.tagCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      userCount: ['', [Validators.required, Validators.max(this.license.userCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      comunityCount: ['', [Validators.required, Validators.max(this.license.comunityCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      feedbackCount: ['', [Validators.required, Validators.max(this.license.feedbackCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      eventCount: ['', [Validators.required, Validators.max(this.license.eventCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)],
      promoCount: ['', [Validators.required, Validators.max(this.license.promoCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)]
    });
  }

  submit() {
    let forms = [this.userFormGroup.value, this.url, this.adminFormGroup.value, this.licenseFormGroup.value];
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

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

}

