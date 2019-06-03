
export class FeedbackCreateReq {
  constructor(
    public name: string,
    public createdUserId: string,
    public community: CommunityData,
    public futureSurvey: FutureSurveyData,
  ) { }
}

export class CommunityData {
  constructor(
    public id: string
  ) { }
}

export class FutureSurveyData {
  constructor(
    public title: string,
    public clientId: string,
    public origin: string,
    public channel: string,
    public languageJson: string,
    public compatibility: string,
    public pages: any[],
    public jsonContent: string
  ) { }
}

export class FeedbackUpdateReq {
  constructor(
    public name: string,
    public status: string,
    public lastModifiedUserId: string
  ) { }
}

export class CommunityCreateReq {
  constructor(
    public name: string,
    public status: string,
    public description: string,
    public createdUserId: string,
    public client: ClientData,
    public users: UserData[]
  ) { }
}

export class CommunityUpdateReq {
  constructor(
    public name: string,
    public status: string,
    public description: string,
    public lastModifiedUserId: string
  ) { }
}


export class ClientData {
  constructor(
    public id: string
  ) { }
}


export class UserData {
  constructor(
    public id: string
  ) { }
}

export class InviteeCreateeReq {
  constructor(
    public name: string,
    public email: string,
    public username: string,
    public password: string,
    public customField1: string,
    public customField2: string,
    public customField3: string,
    public inviteeGroup: InviteeGroupData
    ) { }
  }
  
  
  export class InviteeGroupData {
    constructor(
      public id: string
    ) { }
  }
  
  export class InviteeUpdateReq {
    constructor(
    public name: string,
    public email: string,
    public username: string,
    public password: string,
    public customField1: string,
    public customField2: string,
    public customField3: string,
  ) { }
}