import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class InteractionViewService {
  surveyApiUrl: string = environment.surveyApiURL;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  };

  constructor(private http: HttpClient) {}

  getInteractionById(interactionId): Observable<any> {
    return this.http
      .get<any>(
        this.surveyApiUrl + "surveys/futureSurveyInteraction/" + interactionId
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }
}
