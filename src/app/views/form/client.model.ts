export class Client{
    constructor(
        public id:string,
        public name:string
    ){}
}

export class Users{
    constructor(
        public id:number,
        public detail?:Client
    ){}
}

