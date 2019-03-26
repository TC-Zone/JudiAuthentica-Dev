export class LocalStorageHandler {
  currentUser: any;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // console.log("current user obj : ");
    // console.log(this.currentUser);
  }
}
