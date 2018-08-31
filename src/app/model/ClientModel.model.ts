export class Content{
    constructor(public id:string, public name:string){}
}

export interface Clients{
    status: string;
    statusCode: string;
    content: Content[];
}