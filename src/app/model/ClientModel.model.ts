export class Content{
    constructor(public id:string, public name:string){}
}

export interface Clients{
    status: string;
    statusCode: string;
    content: Content[];
}

export class ClientCreateReq {
    constructor(
      public name: string,
      public description: string,
      public users: any[]
    ) { }
  }
  
  export class ClientUpdateReq {
    constructor(
      public name: string,
      public description: string
    ) { }
  }
  
  export class UserData {
    constructor(
      public userName: string,
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