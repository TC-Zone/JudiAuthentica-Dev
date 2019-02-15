import { Component, OnInit, AfterViewInit, Renderer2, Inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";

import { RoutePartsService } from "./shared/services/route-parts.service";
import { ThemeService } from "./shared/services/theme.service";

import { filter } from "rxjs/operators";
import { UserService } from "./views/sessions/UserService.service";
import { authProperties } from './shared/services/auth/auth-properties';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  appTitle = "CP Authentica";
  pageTitle = "";


  constructor(
    public title: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: RoutePartsService,
    private themeService: ThemeService,
    private renderer: Renderer2,
    private userService: UserService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.changePageTitle();
    this.checkLoginUser();
    this.userService.setComponetDisable();
  }

  ngAfterViewInit() {
    this.themeService.applyMatTheme(this.renderer);
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

  checkLoginUser() {
    const userObj = JSON.parse(localStorage.getItem(authProperties.storage_name));
    const currentPath = this.document.location.href;
    const origin = this.document.location.origin;
    const navigationPath = currentPath.replace(origin + '/', '');
    if (userObj) {
      const isTokenExired = this.userService.isTokenExpired(userObj.token);
      if (isTokenExired) {
        // this.router.navigate([navigationPath]);
        this.removeLocalStorageElement();
        this.router.navigate(['sessions/signin']);
      } //else {
        //this.removeLocalStorageElement();
        //this.router.navigate(['sessions/signin']);
      //}
    } else {
      this.removeLocalStorageElement();
      if (navigationPath === 'sessions/signin') {
        this.router.navigate(['sessions/signin']);
      } else {
        this.router.navigate([navigationPath]);
      }
    }
  }

  removeLocalStorageElement() {
    localStorage.removeItem(authProperties.storage_name);
    localStorage.removeItem(authProperties.componentList);
  }

}
