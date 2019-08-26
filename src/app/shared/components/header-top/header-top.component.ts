import { Component, OnInit, Input, OnDestroy, Renderer2 } from "@angular/core";
import { NavigationService } from "../../../shared/services/navigation.service";
import { Subscription } from "rxjs";
import { ThemeService } from "../../../shared/services/theme.service";
import { TranslateService } from "@ngx-translate/core";
import { LayoutService } from "../../services/layout.service";
import { AuthenticationService } from "../../../views/sessions/authentication.service";
import { Router } from "@angular/router";
import { LocalStorageHandler } from "../../helpers/local-storage";
import { authProperties } from "app/shared/services/auth/auth-properties";

@Component({
  selector: "app-header-top",
  templateUrl: "./header-top.component.html"
})
export class HeaderTopComponent extends LocalStorageHandler
  implements OnInit, OnDestroy {
  layoutConf: any;
  menuItems: any;
  menuItemSub: Subscription;
  egretThemes: any[] = [];
  currentLang = "en";
  availableLangs = [
    {
      name: "English",
      code: "en"
    },
    {
      name: "Spanish",
      code: "es"
    }
  ];
  @Input() notificPanel;

  public currentuser;
  public userId;
  public profileImg;
  private storage_name = authProperties.storage_name;


  constructor(
    private layout: LayoutService,
    private navService: NavigationService,
    public themeService: ThemeService,
    public translate: TranslateService,
    private renderer: Renderer2,
    private authService: AuthenticationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.layoutConf = this.layout.layoutConf;
    this.egretThemes = this.themeService.egretThemes;
    this.menuItemSub = this.navService.menuItems$.subscribe(res => {
      res = res.filter(
        item => item.type !== "icon" && item.type !== "separator"
      );
      let limit = 4;
      let mainItems: any[] = res.slice(0, limit);
      if (res.length <= limit) {
        return (this.menuItems = mainItems);
      }
      let subItems: any[] = res.slice(limit, res.length - 1);
      mainItems.push({
        name: "More",
        type: "dropDown",
        tooltip: "More",
        icon: "more_horiz",
        sub: subItems
      });
      this.menuItems = mainItems;
    });



    // ----------------------------- UserProfileImage -------------------------------
    this.currentUser = JSON.parse(localStorage.getItem(this.storage_name));
    this.userId = this.currentuser.userData.id;
    // ------------------------------------------------------------------------------
  }

  ngOnDestroy() {
    this.menuItemSub.unsubscribe();
  }
  setLang() {
    this.translate.use(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(this.renderer, theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    if (this.layoutConf.sidebarStyle === "closed") {
      return this.layout.publishLayoutChange({
        sidebarStyle: "full"
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: "closed"
    });
  }

  signOut() {
    console.log("sign out called HEADER TOP");
    this.authService.logout();
    if (localStorage.getItem(this.storage_name)) {
      console.log("NULL OI");
    }

    // this.router.navigate(['/sessions/signin']);
  }
}
