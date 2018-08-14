import { Injectable } from "@angular/core";

interface IFileInformation {
  name?: string;
  type?: string;
  data?: any[];
}

@Injectable()
export class AppFileDownloadService {
  constructor() {}

  getTypeString(type: string): string {
    switch (type) {
      case "csv":
        return "text/csv;charset=utf-8;";

      default:
        return "undefined";
    }
  }

  downloadFile(fileInfor: IFileInformation) {
    let type = this.getTypeString(fileInfor.type);
    let blob = new Blob(["\ufeff" + fileInfor.data], { type: type });
  }
}
