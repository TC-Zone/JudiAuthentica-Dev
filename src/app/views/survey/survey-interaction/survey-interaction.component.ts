import { Component, OnInit, OnDestroy } from "@angular/core";
import { egretAnimations } from "../../../shared/animations/egret-animations";
import { CanadaLocation } from "../../../shared/fake-db/location-db";
import { UserDB } from "../../../shared/fake-db/users";
import { ProductCrudService } from "app/views/product-crud/product-crud.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { SurveyCommonComponent } from "../survey-common.component";
import { EvoteService } from "../../evote/evote-service.service";
import { Subscription } from "rxjs";
import { ResponseModel } from "../../../model/ResponseModel.model";
import { AppLoaderService } from "../../../shared/services/app-loader/app-loader.service";
import { AppErrorService } from "../../../shared/services/app-error/app-error.service";
import { SurveyService } from "../survey.service";

@Component({
  selector: "app-survey-interaction",
  templateUrl: "./survey-interaction.component.html",
  animations: egretAnimations
})
export class SurveyInteractionComponent implements OnInit, OnDestroy {
  public cities: any[];
  public interactionForm: FormGroup;
  public feedbackForm: FormGroup;
  public getProductsSub: Subscription;
  public getAllSurveySub: Subscription;
  public response: ResponseModel;

  public canada: CanadaLocation;
  public user: UserDB;

  public cityArrays: any[];
  public productDetails: any[];
  public detailLength: number;

  public products: any[];

  public productId: any;
  public attempts: any;

  public surveyId: any;
  surveyRows: any[];
  surveyRecord: any;
  answerTemplateArray: any[];

  constructor(
    private prodService: ProductCrudService,
    private surveyService: SurveyService,
    private fb: FormBuilder,
    private loader: AppLoaderService,
    private errDialog: AppErrorService
  ) {
    this.canada = new CanadaLocation();
    this.user = new UserDB();
  }

  ngOnDestroy() {
    if (this.getProductsSub) {
      this.getProductsSub.unsubscribe();
    }
  }

  ngOnInit() {
    // load all products
    this.getProducts();
    this.getAllSurvey();

    // get array of cities and their provinces
    let cities = this.canada.cities;
    let provinces = this.canada.provinces;

    this.cityArrays = cities.map(cityData => {
      return {
        city: cityData[0],
        province: provinces[cityData[1]]
      };
    });

    this.interactionForm = this.fb.group({
      productId: [],
      qty: [],
      currentQty: [""]
    });

    this.buildFeedBackForm();
  }

  buildFeedBackForm(surveyId?, qty?) {
    this.feedbackForm = this.fb.group({
      surveyId: [surveyId || ""],
      qty: [qty || ""]
    });
  }

  getProducts() {
    this.getProductsSub = this.prodService.getAllProducts().subscribe(data => {
      this.response = data;
      this.products = this.response.content;
    });
  }

  getAllSurvey() {
    this.getAllSurveySub = this.surveyService
      .getAllSurveys()
      .subscribe(successResp => {
        this.surveyRows = successResp.content;
      });
  }

  setProductDetails(product) {
    console.log(product);
    this.productId = product.id;
    this.surveyId = product.surveyId;
    this.interactionForm.patchValue({
      currentQty: product.quantity
    });
  }

  doBulkUpload() {
    this.loader.open();
    this.attempts = this.interactionForm.value.qty;
    console.log("attempts : " + this.attempts);
    this.prodService.getProductDetails(this.productId).subscribe(
      successResp => {
        const auths = (this.productDetails = successResp.content);
        let num = 0;

        for (num = 0; num < this.attempts; num++) {
          const request: AuthRequest = this.generateRequest(
            auths[num].authenticationCode
          );
          console.log(request);
          this.prodService.authenticate(request).subscribe(data => {
            console.log(".............RESPONSE...........");
            console.log(data);
          });
        }

        this.buildFeedBackForm(this.surveyId, this.attempts);
        this.showSurveyInfo(this.surveyId);
        this.loader.close();
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

  showSurveyInfo(id) {
    this.surveyService.getSurveyById(id).subscribe(data => {
      this.surveyRecord = data;
    });
  }

  doFeedBackRequest() {
    console.log(this.productDetails);

    this.loader.open();
    let surveyID = this.feedbackForm.value.surveyId;
    let attempts = this.feedbackForm.value.qty;

    console.log("SURVEY ID : " + surveyID);
    console.log("ATTEMPTS : " + attempts);

    let num = 0;
    for (num = 0; num < attempts; num++) {
      let rootQuestion: any[] = [];
      let questions: any[] = this.surveyRecord.questions;
      questions.forEach(question => {
        this.surveyService
          .getAnsTemplateById(question.answerTemplate.id)
          .subscribe(response => {
            let answerArr: any[] = response.answers;
            let randomAns =
              answerArr[Math.floor(Math.random() * answerArr.length)];

            let actAnswer: any[] = [];
            actAnswer.push(randomAns);

            let questionPart: QuestionPart = new QuestionPart(
              question.id,
              actAnswer
            );

            rootQuestion.push(questionPart);
            if (questions.length === rootQuestion.length) {
              console.log("LAUNCHING TIME " + num);
              let finalReq: AnswerRequest = new AnswerRequest(
                this.productDetails[num].authenticationCode,
                surveyID,
                rootQuestion
              );
              // console.log(finalReq);
              console.log(JSON.stringify(finalReq));
              //let re = JSON.stringify(finalReq);
              //console.log(JSON.parse(re));
              this.surveyService
                .submitFeedbackAnswers(finalReq)
                .subscribe(data => {
                  console.log("componenet : success");
                });
            }
          });
      });
    }

    this.loader.close();
  }

  generateRequest(authCode): AuthRequest {
    let item = this.cityArrays[
      Math.floor(Math.random() * this.cityArrays.length)
    ];
    let userItem = this.user.users[
      Math.floor(Math.random() * this.user.users.length)
    ];

    let ip =
      Math.floor(Math.random() * 255) +
      1 +
      "." +
      (Math.floor(Math.random() * 255) + 0) +
      "." +
      (Math.floor(Math.random() * 255) + 0) +
      "." +
      (Math.floor(Math.random() * 255) + 0);
    console.log(ip);

    let request: AuthRequest = new AuthRequest(
      authCode,
      userItem.email,
      userItem.phone,
      item.city,
      item.province,
      ip
    );
    return request;
  }
}

export class AuthRequest {
  constructor(
    public authCode,
    public email,
    public mobileNumber,
    public city,
    public province,
    public ip
  ) {}
}

export class QuestionPart {
  constructor(public id, public answers: any) {}
}

export class AnswerRequest {
  constructor(public authCode, public surveyId, public questions: any[]) {}
}
