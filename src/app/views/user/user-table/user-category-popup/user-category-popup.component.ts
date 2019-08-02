import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { autoCompletableCategory } from 'app/model/ClientModel.model';


@Component({
  selector: 'app-user-category-popup',
  templateUrl: './user-category-popup.component.html'
})
export class UserCategoryPopupComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UserCategoryPopupComponent>,
    private fb: FormBuilder,
  ) {
    this.filteredCategories = this.categoryCtrl.valueChanges
      .pipe(
        startWith(null),
        map(category => category ? this._filterCategories(category) : this.allCategories.slice())
      );
  }

  ngOnInit() {

    this.allCategories = JSON.parse(JSON.stringify(this.data.category));
    this.selectedCategories = [];
    if (this.data.selectedCategory.length > 0) {
      this.data.selectedCategory.forEach(element => {
        this.addSelectedCategory(element.id)
      });
    }

  }

  submit() {
    this.dialogRef.close(this.selectedCategories);
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

}
