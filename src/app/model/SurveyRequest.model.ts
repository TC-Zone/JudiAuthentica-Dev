export class SurveyModel {
  public topic: string;
  public type: string;
  public startDate: string;
  public endDate: string;
  public productId: string;
  public voteId: string;
  public questions?: any[] = [];

  constructor(obj: ISurveyView) {
    this.topic = obj.topic;
    this.type = obj.type;
    this.startDate = obj.startDate;
    this.endDate = obj.endDate;
    this.productId = obj.productId;
    this.voteId = obj.voteId;


    obj.questions.forEach(question => {
      const answerTemplate = new AnswerTemplate(
        "name",
        question.answerTemplate
      );

      let qOBj = new Question(question.name, answerTemplate);
      console.log(qOBj);
      this.questions.unshift(qOBj);
    });
  }
}

export class Question {
  //answerTemplate
  constructor(public name: string, public answerTemplate: AnswerTemplate) {}
}

export class AnswerTemplate {
  constructor(public name: string, public id: string) {}
}

interface ISurveyView {
  topic: string;
  type: string;
  startDate: string;
  endDate: string;
  productId: string;
  voteId: string;
  questions?: any[];
}
