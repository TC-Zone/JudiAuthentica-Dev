import { Component, OnInit, AfterViewInit, Renderer2, Inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  NavigationStart,
  ActivatedRouteSnapshot,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  RoutesRecognized,
  GuardsCheckStart,
  ChildActivationStart,
  ActivationStart,
  GuardsCheckEnd,
  ResolveStart,
  ResolveEnd,
  ActivationEnd,
  ChildActivationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

import { RoutePartsService } from "./shared/services/route-parts.service";
import { ThemeService } from "./shared/services/theme.service";

import { filter } from "rxjs/operators";
import { AuthenticationService } from "./views/sessions/authentication.service";
import { authProperties } from './shared/services/auth/auth-properties';
import { DOCUMENT } from "@angular/common";
import * as jwt_decode from "jwt-decode";
import { InteractionService } from "./shared/services/app-profile/interaction.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  appTitle = "CP Authentica";
  pageTitle = "";

  public currentUser;
  public updateProfile = true;
  private updateProfileImageUrls = ['/profile/profile-settings', '/profile/account-settings', '/profile/general-settings'];
  private updateProfileImageBlackListUrls = ['/sessions/signin'];

  constructor(
    public title: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    private themeService: ThemeService,
    private renderer: Renderer2,
    private userService: AuthenticationService,
    private _interactionService: InteractionService,
    @Inject(DOCUMENT) private document: Document
  ) {

    this.router.events.subscribe((ev) => {

      if (ev instanceof NavigationEnd) {

        let url = this.router.url;
        console.log('---------------------------------- AppComponent : APP COMPONENT - ', url);

        // if (localStorage.getItem("currentUser") && this.loggedUserBlackListUrls.indexOf(url) === 0) {
        //   this.router.navigate(["/profile/profile-settings"]);
        // }

        if (this.updateProfile && this.updateProfileImageBlackListUrls.indexOf(url) < 0) {
          this.changeProfilePicture();
          console.log('---------------------------------- AppComponent : UPDATE PROFILE PICTURE - FIRST TIME ');

        } else if (this.updateProfileImageUrls.indexOf(url) >= 0) {
          this.changeProfilePicture();
          console.log('---------------------------------- AppComponent : UPDATE PROFILE PICTURE ');
        }

      }

    });

  }

  ngOnInit() {
    this.changePageTitle();
  }

  ngAfterViewInit() {
    this.themeService.applyMatTheme(this.renderer);
  }

  changeProfilePicture() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser !== null && this.currentUser.id !== null) {
      this._interactionService.changeProfilePicture(this.currentUser.id);
      this.updateProfile = false;
    }

  }

  changePageTitle() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(routeChange => {
        var routeParts = this.routePartsService.generateRouteParts(
          this.activeRoute.snapshot
        );
        if (!routeParts.length) return this.title.setTitle(this.appTitle);
        // Extract title from parts;
        this.pageTitle = routeParts
          .reverse()
          .map(part => part.title)
          .reduce((partA, partI) => {
            return `${partA} > ${partI}`;
          });
        this.pageTitle += ` | ${this.appTitle}`;
        this.title.setTitle(this.pageTitle);
      });
  }

  removeLocalStorageElement() {
    localStorage.removeItem(authProperties.storage_name);
    localStorage.removeItem(authProperties.componentList);
  }


}
