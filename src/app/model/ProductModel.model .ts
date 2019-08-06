export class ProductCreationRequest {
  code: string;
  name: string;
  description: string;
  batchNumber: string;
  quantity: string;
  expireDate: string;
  communityId: string;
  categoryId: string;
  videoUrl: string;
  file: any;

  constructor(public formValue: any) {
    this.code = formValue.code;
    this.name = formValue.name;
    this.description = formValue.description;
    this.batchNumber = formValue.batchNumber;
    this.quantity = formValue.quantity;
    this.expireDate = formValue.expireDate;
    this.communityId = formValue.communityId;
    this.categoryId = formValue.categoryId;
    this.file = formValue.file;
    this.videoUrl = formValue.videoUrl;
  }
}
