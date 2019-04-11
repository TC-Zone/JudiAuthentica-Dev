import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../sessions/authentication.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  animations: egretAnimations
})
export class UserComponent implements OnInit {
  public clientId: string;
  public name: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getLoggedUserDetail();
    if (currentUser) {
      const client = currentUser.userData.client;
      this.clientId = client.id;
      this.name = client.name;
    } else {
      this.router.navigate(["clients/client-table"]);
    }
  }
}
