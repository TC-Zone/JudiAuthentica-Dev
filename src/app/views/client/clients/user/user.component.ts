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

    // this.activeRoute.queryParams.subscribe(params => {
    //   console.log('------------------------------- params',params);
    //   if( params["clientId"] !== undefined){
    //     this.clientId = params["clientId"];
    //     this.clientName = params["clientName"];
    //   } else {
    //     // this.router.navigate(["clients/client-table"]);
    //   }
    // });
    
    // const currentUser = this.authService.getLoggedUserDetail();
    // if (currentUser) {
    //   const client = currentUser.userData.client;
    //   this.clientId = client.id;
    //   this.name = client.name;
    // } else {
    //   this.router.navigate(["clients/client-table"]);
    // }
  }
}
