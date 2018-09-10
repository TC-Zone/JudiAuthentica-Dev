export class SurveyModel {
  public topic: string;
  public type: string;
  public startDate: string;
  public endDate: string;
  public productId: string;
  public voteId: string;
  public questions?: any;

  constructor(obj: ISurveyView) {
    this.topic = obj.topic;
    this.type = obj.type;
    this.startDate = obj.startDate;
    this.endDate = obj.endDate;
    this.productId = obj.productId;
    this.voteId = obj.voteId;
    this.questions = obj.questions;
  }
}

interface ISurveyView {
  topic: string;
  type: string;
  startDate: string;
  endDate: string;
  productId: string;
  voteId: string;
  questions?: any;
}
