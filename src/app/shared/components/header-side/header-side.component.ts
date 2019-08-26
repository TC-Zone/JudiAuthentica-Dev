import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  Renderer2
} from "@angular/core";
import { ThemeService } from "../../services/theme.service";
import { LayoutService } from "../../services/layout.service";
import { TranslateService } from "@ngx-translate/core";
import { AuthenticationService } from "../../../views/sessions/authentication.service";
import { Router } from "@angular/router";
import { LocalStorageHandler } from "../../helpers/local-storage";
import { InteractionService } from "app/shared/services/app-profile/interaction.service";
import { authProperties } from "app/shared/services/auth/auth-properties";

@Component({
  selector: "app-header-side",
  templateUrl: "./header-side.template.html"
})
export class HeaderSideComponent extends LocalStorageHandler implements OnInit {
  @Input() notificPanel;
  currentLang = "en";
  public availableLangs = [
    {
      name: "English",
      code: "en"
    },
    {
      name: "Spanish",
      code: "es"
    }
  ];
  public egretThemes;
  public layoutConf: any;

  public currentuser;
  public userId;
  public profileImg;
  private storage_name = authProperties.storage_name;

  constructor(
    private themeService: ThemeService,
    private layout: LayoutService,
    public translate: TranslateService,
    private renderer: Renderer2,
    private authService: AuthenticationService,
    private router: Router,
    private _interactionService: InteractionService
  ) {
    super();
  }
  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
    this.layoutConf = this.layout.layoutConf;
    this.translate.use(this.currentLang);


    // ---------------------------------- UserProfile -------------------------------

    this.currentuser = JSON.parse(localStorage.getItem(this.storage_name));
    this.userId = this.currentuser.userData.id;

    this._interactionService.changeProfilePicture$.subscribe(
      url => {
        this.profileImg = url;
      }
    );

    // ------------------------------------------------------------------------------

  }



  setLang(e) {
    console.log(e);
    this.translate.use(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(this.renderer, theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    console.log("TOGGLE NAV");
    if (this.layoutConf.sidebarStyle === "closed") {
      return this.layout.publishLayoutChange({
        sidebarStyle: "full"
      });
    }
    this.layout.publishLayoutChange({
      sidebarStyle: "closed"
    });
  }

  toggleCollapse() {
    console.log("TOGGLE CLSPS");
    // compact --> full
    if (this.layoutConf.sidebarStyle === "compact") {
      return this.layout.publishLayoutChange(
        {
          sidebarStyle: "full"
        },
        { transitionClass: true }
      );
    }

    // * --> compact
    this.layout.publishLayoutChange(
      {
        sidebarStyle: "compact"
      },
      { transitionClass: true }
    );
  }

  signOut() {
    console.log("sign out called HEADER SIDE");
    this.authService.logout();
    if (localStorage.getItem(this.storage_name)) {
      console.log("NULL OI");
    }

    // this.router.navigate(['/sessions/signin']);
  }
}
