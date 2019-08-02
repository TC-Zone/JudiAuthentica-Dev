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
  ) { }
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

export class CountryData {
  constructor(
    public id: string,
    // public name: string,
    // public code: string
  ) { }
}

export class UserData {
  constructor(
    public accountName: string,
    public email: string,
    public role: AdminRoleData,
  ) { }
}

export class AdminRoleData {
  constructor(
    public name: string,
    public description: string,
    public authorities: AuthorityData[],
  ) { }
}

export class AuthorityData {
  constructor(
    public id: string
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

export class UserUpdateReq {
  constructor(
    public accountName: string,
    public email: string,
    public role: RoleData,
    public status : string
  ) { }
}

export class UserCategoryUpdateReq {
  constructor(
    public categories: CategoryData[]
  ) { }
}

export class UserCommunityUpdateRequest {
  constructor(
    public communities: CommunityData[]
  ) { }
}

// export class UserCategoryUpdateReq {
//   constructor(
//     public accountName: string,
//     public email: string,
//     public role: RoleData,
//     public categories: CategoryData[]
//   ) { }
// }

export class ClientCategoryUpdateReq {
  constructor(
    public categories: CategoryData[]
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
  ) { }
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
    public id: string,
    public accountName: string,
    public email: string,
  ) { }
}

export class passwordUpdateReq {
  constructor(
    public id: string,
    public password: string,
    public newPassword: string,
  ) { }
}

export class userImageReq {
  constructor(
    public id: string,
    public imageContent: string,
    public profileImage: string,
  ) { }
}

export interface autoCompletableCategory {
  id: string;
  name: string;
}

export interface roleAuthority {
  id: string;
  name: string;
  code: string;
}
