import { Component, OnInit, Inject } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from "@angular/forms";
import { LayoutService } from '../../../shared/services/layout.service';
import { ProductCrudService } from '../../product-crud/product-crud.service';
import { Products,ProductsDet } from '../../../model/ProductModel.model';
import {Observable} from 'rxjs/observable';
import { debounceTime, switchMap}from 'rxjs/operators';

@Component({
  selector: "app-survey-creation-popup",
  templateUrl: "./survey-creation-popup.component.html",
  animations: egretAnimations
})
export class SurveyCreationPopupComponent implements OnInit {
  public surveyForm: FormGroup;
  selectedType : any;
  public filteredProduct: Observable<Products>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SurveyCreationPopupComponent>,
    private layout: LayoutService,
    private productService: ProductCrudService,
  ) {}
 


 surveyTypes = [
    {
      name: 'Product Survey',
      value: 'product'
     },
    {
      name: 'Evote Survey',
      value: 'evote'
    }
  ];



  ngOnInit() {
    
    this.buildSurveyForm(this.data.payload);
    this.selectedType = this.data.payload.type;
    if(this.data.payload.type === this.surveyTypes[0]){
      console.log('equals')
    }
    
       
    this.filteredProduct = this.surveyForm.get('product').valueChanges
    .pipe(
      debounceTime(200),
      switchMap(value =>
        this.productService.productSuggestion({name:value},1) 
                                      
      )       
    );
    
    console.log(this.surveyTypes[0])
    console.log(this.data.payload.type);
  }

  buildSurveyForm(fieldItem) {
    this.surveyForm = this.fb.group({
      topic: [fieldItem.topic || ""],
      type : [fieldItem.type || ""],
      product : [fieldItem.product || ""],

    });
  }

  submit(){
    this.layout.publishLayoutChange({
      sidebarStyle: "closed"
    });
    this.dialogRef.close(this.surveyForm.value);
  }

}
