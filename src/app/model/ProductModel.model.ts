
export class ProductsDet{
    constructor(
      public  id: string,      
      public  code: number,      
      public  batchNumber: number,
      public  name: string,
    ){}
}

export interface Products {        
    status: string;
    statusCode: number;
    content: ProductsDet[];     
    
}