import { Component } from "@angular/core";
import { ResponseModel } from "../../model/ResponseModel.model";
import { Subscription } from "rxjs";
import { SurveyService } from "../survey/survey.service";
import { CrudService } from "../cruds/crud.service";
import { ClientService } from "../client/client.service";

// -----------------------------------------
// Product Crud Common Function and Operator
// -----------------------------------------

@Component({
  selector: "product-common",
  template: ""
})
export class ProductCommonComponent {
  public getCategoriesSub: Subscription;

  public categories: any[];

  constructor(
    public surveyService: SurveyService,
    public clientService: ClientService
  ) {}

  /** RAVEEN - 2019/04/04
   * Fetch All the categories bound to client
   *
   * TODO : if Super admin log into system, this service should fetch all the categories without client filtering.
   * local storage way can be good for identify which user is logged into system and user's roles data
   *
   * @param clientId
   *
   */
  getClientCategories(clientId) {
    this.getCategoriesSub = this.clientService
      .getClientCategories(clientId)
      .subscribe(data => {
        this.categories = data.content;
      });
  }
}
