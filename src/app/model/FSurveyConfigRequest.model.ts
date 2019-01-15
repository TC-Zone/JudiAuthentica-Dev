// Removing invite configuration section from future survey config popup - YS - The Flash Sprint
// export class FSurveyConfigRequest {
//   title: string;
//   clientId: string;
//   channel: string;
//   jsonContent: string;
//   isPreDefined?: boolean;
//   inviteeGroupId?: string;
//   inviteeGroupName?: string;
//   invitees?: any[];
//   constructor(
//     public formValue: any,
//     public jsoncontent: string,
//     public csvArray: any[]
//   ) {
//     this.title = formValue.title;
//     this.clientId = formValue.client;
//     this.channel = formValue.channel;
//     this.jsonContent = jsoncontent;
//     this.isPreDefined = formValue.isPreDefined ? true : false;
//     this.inviteeGroupId = formValue.inviteeGroupId;
//     this.inviteeGroupName = formValue.inviteeGroupName;
//     this.invitees = csvArray;
//   }
// }

// New Request Wrapper from The Flash Sprint - YS
export class FSCreateRequest {
  constructor(
    public title: string,
    public clientId: string,
    public origin: string,
    public channel: string,
    public pages: any[],
    public jsonContent: string
  ) {}
}

export class PublicPart {
  constructor(
    public title,
    public clientId,
    public channel,
    public jsonContent: string,
    public pages: any[]
  ) {}
}

export class PrivatePart {
  constructor(
    public title,
    public clientId,
    public channel,
    public jsonContent: string,
    public pages: any[],
    public isPreDefined: boolean,
    public inviteeGroupId?,
    public inviteeGroupName?: string,
    public invitees?: any[]
  ) {}
}
