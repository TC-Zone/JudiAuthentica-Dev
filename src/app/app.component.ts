import { Component, OnInit, AfterViewInit, Renderer2 } from "@angular/core";
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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.changePageTitle();
    this.checkLoginUser();
    this.setComponetDisable();
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

  setComponetDisable() {
    const userObj = JSON.parse(localStorage.getItem(authProperties.storage_name));
    console.log(userObj);
  }

  checkLoginUser() {
    const userObj = JSON.parse(localStorage.getItem(authProperties.storage_name));
    if (userObj) {
      const isTokenExired = this.userService.isTokenExpired(userObj.token);
      if (!isTokenExired) {
        this.router.navigate(['profile']);
      } else {
        localStorage.removeItem(authProperties.storage_name);
        this.router.navigate(['sessions/signin']);
      }
    } else {
      this.router.navigate(['sessions/signin']);
    }
  }

}
