import { Component, OnInit } from "@angular/core";
import { egretAnimations } from "../../../../shared/animations/egret-animations";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../../sessions/authentication.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  animations: egretAnimations
})
export class UserComponent implements OnInit {
  public clientId: string;
  public clientName: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const currentClient = JSON.parse(localStorage.getItem('currentClient'));
    if (currentClient) {
      this.clientId = currentClient.id;
      this.clientName = currentClient.name;
    }
  }
}
