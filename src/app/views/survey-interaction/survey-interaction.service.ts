import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs/";
import { ProductCrudService } from "../product-crud/product-crud.service";
import { EvoteService } from "../evote/evote-service.service";
import { CrudService } from "../cruds/crud.service";

@Injectable()
export class SurveyInteractionService {
  detailInstance: any;

  constructor(
    private prodService: ProductCrudService,
    private evoteService: EvoteService,
    private clientService: CrudService
  ) {}
}

export class SurveyDetailModel {
  constructor(
    public id,
    public topic,
    public source: string,
    public client: any
  ) {}
}

export class SourceDetail {
  constructor(
    public sourceName,
    public batch,
    public imageName: string,
    public client: any
  ) {}
}

export class SurveyViewModel {
  constructor(public topic, public type: string, public questions: any) {}
}

export class QuestionModel {
  constructor(public id, public name: string, public answerTemplate: any) {}
}
