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
    public users: any[],
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

// export class ClientUpdateReq {
//   constructor(
//     public name: string,
//     public description: string
//   ) { }
// }

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
    public userName: string,
    public password: string,
    public email: string,
    public roles: any[],
    public client: ClientData,
  ) { }
}

export class ClientData {
  constructor(
    public id: string
  ) { }
}

export class UserRole {
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