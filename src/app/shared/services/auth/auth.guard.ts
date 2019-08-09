import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  private loggedUserBlackListUrls = ['/sessions/signin'];
  public authToken;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let url = this.router.url;
    console.log('---------------------------------- AuthGuard : url -', url);
    console.log('---------------------------------- AuthGuard : state.url - ', state.url);

    if (localStorage.getItem("currentUser")) {
      if (this.loggedUserBlackListUrls.indexOf(state.url) === 0) {
        if (url !== '/') {
          this.router.navigate([url]);
        } else {
          this.router.navigate(['/profile/profile-settings']);
        }
        return false;
      } else {
        return true;
      }
    }
    if (state.url === "/sessions/signin") {
      return true;
    }
    this.router.navigate(["/sessions/signin"]);
    return false;
  }

}
