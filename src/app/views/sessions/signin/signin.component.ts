import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton, MatSnackBar } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { authProperties } from "./../../../shared/services/auth/auth-properties";
import { interval } from "rxjs";
import { CurrentUser } from "app/model/User.model";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {

  @ViewChild(MatButton)
  private submitButton: MatButton;

  private signinForm: FormGroup;
  private successUrl: string = "profile/profile-settings";
  private signInUrl: string = "sessions/signin";
  private result: boolean = true;
  private storage_name = authProperties.storage_name;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  signin() {
    const currentUser = this.authService.getLoggedUserDetail();

    if (currentUser) {
      localStorage.removeItem(this.storage_name);
    }

    this.submitButton.disabled = true;
    const signinData = this.signinForm.value;

    this.authService.login(signinData).subscribe(response => {

      console.log("---------------------------------- SigninComponent : authService.login - response - ", response);
      let currentUser: CurrentUser = new CurrentUser("", false, response.access_token, response.refresh_token, response.expires_in);

      this.authService.setLoggedUserDetail(currentUser);
      this.authService.getLoggedUserData(response.user_id).subscribe(response => {

        // BASED ON ASSUMPTION : Below code may be change, if we got a better way to identify a super admin.
        response.content.role.authorities.forEach(authority => {
          if (authority.code === 'cm-a') {
            currentUser.isAuthorized = true;
          }
        });

        currentUser.userData = response.content;

        this.authService.setLoggedUserDetail(currentUser);
        console.log("---------------------------------- SigninComponent : currentUser - ", currentUser);

        this.router.navigate([this.successUrl]);

      },
        error => {

          console.log("---------------------------------- SigninComponent : authService.getLoggedUserData - error - ", error);
          this.result = false;
          localStorage.removeItem(this.storage_name);

        }
      );

    },
      error => {
        console.log("---------------------------------- SigninComponent : authService.login - error - ", error);
        this.result = false;
        if (error.status === 400) {
          this.signinForm.reset();
        } else {
          this.signinForm.reset();
          this.router.navigate([this.signInUrl]);
        }
      }
    );
  }

}
