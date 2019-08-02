import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../../shared/services/navigation.service";
import { ThemeService } from "../../services/theme.service";
import { Subscription } from "rxjs";
import PerfectScrollbar from "perfect-scrollbar";
import { LocalStorageHandler } from "../../helpers/local-storage";
import { AuthenticationService } from "../../../views/sessions/authentication.service";
import { LayoutService } from "../../services/layout.service";
import { FutureSurveyOperationalService } from "app/shared/services/survey/future-survey-operational.service";
import { AppErrorService } from "app/shared/services/app-error/app-error.service";
import { InteractionService } from "app/shared/services/app-profile/interaction.service";


@Component({
  selector: "app-sidebar-side",
  templateUrl: "./sidebar-side.component.html"
})
export class SidebarSideComponent extends LocalStorageHandler
  implements OnInit, OnDestroy, AfterViewInit {
  private sidebarPS: PerfectScrollbar;
  public menuItems: any[];
  public hasIconTypeMenuItem: boolean;
  public iconTypeMenuTitle: string;
  private menuItemsSub: Subscription;
  public layoutConf: any;

  public currentUser;
  public userDisplayName;

  public userId;
  public profileImg;



  constructor(
    private navService: NavigationService,
    public themeService: ThemeService,
    public authService: AuthenticationService,
    private layout: LayoutService,
    private errDialog: AppErrorService,
    private _interactionService: InteractionService
  ) {
    super();
  }

  ngOnInit() {

    this.layoutConf = this.layout.layoutConf;
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;


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






    this.menuItemsSub = this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;

      // const removeItemList = this.authService.setComponetDisable();
      // removeItemList.forEach(element => {
      //   const index = this.menuItems.findIndex(x => x.name === element);
      //   if (index >= 0) {
      //     this.menuItems[index].disabled = true;
      //   }
      // });

      const activeItemList = this.authService.getActiveComponet();
      console.log('-------------- activeItemList', activeItemList);


      activeItemList.forEach(element => {
        const index = this.menuItems.findIndex(x => x.name === element);
        if (index >= 0) {
          this.menuItems[index].disabled = false;
        }
        this.menuItems[index].disabled = false;
      });


      console.log('-------------- this.menuItems', this.menuItems);

      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(
        item => item.type === "icon"
      ).length;

    });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sidebarPS = new PerfectScrollbar("#scroll-area", {
        suppressScrollX: true
      });
    });
  }

  ngOnDestroy() {
    if (this.sidebarPS) {
      this.sidebarPS.destroy();
    }
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe();
    }
  }
}
