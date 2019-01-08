import { Component } from "@angular/core";
import { ResponseModel } from "../../model/ResponseModel.model";
import { Subscription } from "rxjs";
import { ProductCrudService } from "../product-crud/product-crud.service";
import { EvoteService } from "../evote/evote-service.service";

@Component({
  selector: "survey-common",
  template: ""
})
export class SurveyCommonComponent {
  public response: ResponseModel;
  selectedType: any;
  getProductsSub: Subscription;
  getEvotesSub: Subscription;
  public products: any[] = [];
  public evotes: any[] = [];

   typeMap: Map<string, string>;

  constructor(
    public productService: ProductCrudService,
    public evoteService: EvoteService
  ) {}

  popuplateDropdown(value) {
    console.log("PASSED TYPE  " + value);

    switch (this.selectedType) {
      case "P":
        this.getProducts();
        break;
      case "V":
        this.getEvotes();
        break;
      default:
        this.getProducts();
        break;
    }
  }

  getProducts() {
    console.log("called PRODUCTS " + this.products.length);
    if (this.products.length === 0) {
      this.getProductsSub = this.productService
        .getAllProductSuggestions()
        .subscribe(data => {
          this.response = data;
          this.products = this.response.content;
        });
    }
  }

  getEvotes() {
    console.log("called EVOTES " + this.evotes.length);
    if (this.evotes.length === 0) {
      this.getEvotesSub = this.evoteService.getAllEvotesSuggestions().subscribe(data => {
        this.response = data;
        this.evotes = this.response.content;
        console.log(this.evotes);
      });
    }
  }


}
