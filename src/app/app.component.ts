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
import * as jwt_decode from "jwt-decode";
import * as jwt from 'angular2-jwt-simple';

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
    // this.checkLoginUser();
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

  // checkLoginUser() {
    // const userObj = JSON.parse(localStorage.getItem(authProperties.storage_name));
    // userObj.token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiU1MiLCJRUyIsIlBTIiwiQVVTIl0sInVzZXJfdHlwZSI6IkFVIiwidXNlcl9pZCI6ImQzNmVlZWJkOGIxZjBjZGUxNjIxMDMzOWU5N2I5NDA4IiwidXNlcl9uYW1lIjoiY29udGFjdHBrdW1hcmFAZ21haWwuY29tIiwic2NvcGUiOlsiQVAiXSwiZXhwIjoxNTUwNDc0MDYyLCJhdXRob3JpdGllcyI6WyJwdXItYyIsInB1ci1kIiwicHUtZCIsIm9wYXNzLWMiLCJwdS1hIiwicGMtcyIsInB1LWMiLCJwdXItcyIsInB1ci11IiwicHVyLXYiLCJwdS11IiwicHUtdiIsIm9wcm9mLXUiLCJwYy1jIiwib3Byb2YtdiIsInB1LXMiXSwianRpIjoiM2VlMWQ0ZWItZTYyNy00ODQ1LTk5ZGItODM3MjU4OTEzMDcwIiwiY2xpZW50X2lkIjoiQ1BBUCJ9.rEjXl1p3xu_p7rYSS6cjjtHBgbApNd_9j2eQ1YBYdOR5HvZQKvoyAf6uICjC6gOs4BkDyl8HsVD1V6QvPoYbbAqXjYVVcVR95i3wEiTt0z7iNvxO0OukA056JbiaLG9nWdNO8-A_09Y_C9DzJZianscYExcFN1Wk7hKzrxmtbfmUZe1WaiIZ3shGOucfvbOQTscfwtaV3FYcnfULi_LBdf7C0ff73DU-J21m8tEATK3z9IyKdvIOsQq5P98uFgK7cazrE5ltC5TVgNy8nnurQkB3EBg6eyF0RUrQl4EzKU-1uVFSeb3Le_f0hbxrSOkBtiMQk3oCOF-PvUoshHaMEw';
    // localStorage.setItem(authProperties.storage_name, JSON.stringify(userObj));

    // const currentPath = this.document.location.href;
    // const origin = this.document.location.origin;
    // const navigationPath = currentPath.replace(origin + '/', '');
    // if (userObj) {
    //   const isTokenExired = this.userService.isTokenExpired(userObj.token);
    //   if (isTokenExired) {
    //     this.removeLocalStorageElement();
    //     this.router.navigate(['sessions/signin']);
    //   }
    // } else {
    //   this.removeLocalStorageElement();
    //   if (navigationPath === 'sessions/signin') {
    //     this.router.navigate(['sessions/signin']);
    //   } else {
    //     this.router.navigate([navigationPath]);
    //   }
    // }
  // }

  removeLocalStorageElement() {
    localStorage.removeItem(authProperties.storage_name);
    localStorage.removeItem(authProperties.componentList);
  }

}
