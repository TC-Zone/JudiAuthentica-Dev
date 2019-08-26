import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalStorageHandler } from "../../shared/helpers/local-storage";
import { AuthenticationService } from "../sessions/authentication.service";
import { InteractionService } from "app/shared/services/app-profile/interaction.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent extends LocalStorageHandler implements OnInit {

  public activeView: string = "overview";
  public currentUser;
  public userDisplayName

  public userId;
  public profileImg;

  constructor(
    private router: ActivatedRoute,
    private authService: AuthenticationService,
    private _interactionService: InteractionService
  ) {
    super();
  }

  ngOnInit() {
    this.activeView = this.router.snapshot.params["view"];

    // ---------------------------------- UserProfile -------------------------------

    this.currentUser = this.authService.getLoggedUserDetail();
    console.log(JSON.stringify(this.currentUser));
    
    this.userDisplayName = this.currentUser.userData.accountName;

    this._interactionService.changeProfileDetails$.subscribe(
      userName => {
        this.userDisplayName = userName;
      }
    );

    this._interactionService.changeProfilePicture$.subscribe(
      url => {
        this.profileImg = url;
      }
    );

    // ------------------------------------------------------------------------------

  }
}
