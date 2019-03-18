import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { GlobalVariable } from "../../../../shared/helpers/global-variable";
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-client-create-popup',
  templateUrl: './client-create-popup.component.html',
  animations: egretAnimations,
})
export class ClientCreatePopupComponent implements OnInit {

  public globalVariable: GlobalVariable = new GlobalVariable();
  public license = this.globalVariable.client.license;
  public regex = this.globalVariable.validators.regex;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = [];
  categoriesValue: string[] = [];
  allCategories: string[] = [];

  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  public clientFormGroup: FormGroup;
  public profilePicFormGroup: FormGroup;
  public adminFormGroup: FormGroup;
  public categoryFormGroup: FormGroup;
  public licenseFormGroup: FormGroup;
  public formStatus = false;
  url;

  public categoriesObj;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ClientCreatePopupComponent>,
    private fb: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));
     }

  ngOnInit() {
    this.categoriesObj = this.data.category;
    this.categoriesObj.forEach(element => {
      this.allCategories.push(element.name);
    });

    this.buildItemForm()
  }

  buildItemForm() {
    
    // this.clientFormGroup = this.fb.group({
    //   name: [''],
    //   description: ['']
    // });
    // this.profilePicFormGroup = this.fb.group({
    //   profilePic: [""]
    // });
    // this.adminFormGroup = this.fb.group({
    //   username: [''],
    //   email: ['']
    // });
    
    this.clientFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.regex._Letter)]],
      description: ['', Validators.required]
    });
    this.profilePicFormGroup = this.fb.group({
      profilePic: ["", Validators.required]
    });
    this.adminFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.categoryFormGroup = this.fb.group({
      category: this.categoryCtrl
    });
    this.licenseFormGroup = this.fb.group({
      tagCount: ['', Validators.required],
      userCount: ['', Validators.required],
      comunityCount: ['', Validators.required],
      feedbackCount: ['', Validators.required],
      eventCount: ['', Validators.required],
      promoCount: ['', Validators.required]
    });
    // promoCount: ['', Validators.required, Validators.max(this.license.promoCount), Validators.min(0)], Validators.pattern(this.regex._PosNumber)]

  }

  submit() {
    let forms = [this.clientFormGroup.value, this.url, this.adminFormGroup.value, this.licenseFormGroup.value, this.categoriesValue];
    this.dialogRef.close(forms);
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
      this.categoriesValue.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categoriesValue.push(event.option.value);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.toLowerCase().indexOf(filterValue) === 0);
  }

}
