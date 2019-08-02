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

  activeView: string = "overview";
  public currentUser;
  public userDisplayName

  public userId;
  public profileImg;

  // Doughnut
  doughnutChartColors: any[] = [
    {
      backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"]
    }
  ];

  total1: number = 500;
  data1: number = 200;
  doughnutChartData1: number[] = [this.data1, this.total1 - this.data1];

  total2: number = 1000;
  data2: number = 400;
  doughnutChartData2: number[] = [this.data2, this.total2 - this.data2];

  doughnutChartType = "doughnut";
  doughnutOptions: any = {
    cutoutPercentage: 85,
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      display: false,
      position: "bottom"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    tooltips: {
      enabled: false
    }
  };

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

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userDisplayName = this.currentUser.accountName;

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
