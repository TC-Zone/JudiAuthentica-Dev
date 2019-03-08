export class Content {
  constructor(public id: string, public name: string) { }
}

export interface Clients {
  status: string;
  statusCode: string;
  content: Content[];
}

export class ClientCreateReq {
  constructor(
    public name: string,
    public description: string,
    public clientLogo: string,
    public users: UserData[],
    public categories: CategoryData[],
    public license: ClientLicenseData
  ) { }
}

export class ClientLicenseData {
  constructor(
    public tagCount: number,
    public userCount: number,
    public communityCount: number,
    public feedbackCount: number,
    public eventCount: number,
    public promoCount: number
  ){}
}

export class ClientUpdateReq {
  constructor(
    public name: string,
    public description: string,
    public clientLogo: string,
    public primaryContactNo: string,
    public addressLine1: string,
    public addressLine2: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public country: CountryData
  ) { }
}

export class CountryData{
  constructor(  
    public id: string,
    public name: string,
    public code: string
    ) {}
}

export class UserData {
  constructor(
    public accountName: string,
    public email: string
  ) { }
}

export class UserCreateReq {
  constructor(
    public accountName: string,
    public password: string,
    public email: string,
    public role: RoleData,
    public client: ClientData,
    public communities: CommunityData[],
    public categories: CategoryData[],
  ) { }
}

export class ClientData {
  constructor(
    public id: string
  ) { }
}

export class LicenseUpdateReq {
    constructor(
      public tagCount: number,
      public userCount: number,
      public communityCount: number,
      public feedbackCount: number,
      public eventCount: number,
      public promoCount: number,
      public client: ClientData,
    ){}
  }

export class RoleData {
  constructor(
    public id: string
  ) { }
}

export class CommunityData {
  constructor(
    public id: string
  ) { }
}

export class CategoryData {
  constructor(
    public id: string
  ) { }
}

export class LicenseUpdateRequest {
  constructor(
    public id: string
  ) { }
}



export class profileUpdateReq {
  constructor(
    public userName: string,
    public password: string,
    public email: string
  ) { }
}