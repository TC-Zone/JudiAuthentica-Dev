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
  submitButton: MatButton;

  signinForm: FormGroup;

  successUrl: string = "profile/profile-settings";
  signInUrl: string = "sessions/signin";
  result: boolean = true;
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

    const signinData = this.signinForm.value;
    this.submitButton.disabled = true;

    this.authService.login(signinData).subscribe(response => {

      console.log('---------------------------- response', response);
      let currentUser: CurrentUser = new CurrentUser("", false , response.access_token, response.refresh_token, response.expires_in);
      this.authService.setLoggedUserDetail(currentUser);
      // localStorage.setItem(this.storage_name, JSON.stringify(currentUser));

      this.authService.getLoggedUserData(response.user_id).subscribe(
        res => {

          // BASED ON ASSUMPTION : Below code may be change, if we got a better way to identify a super admin.
          res.content.role.authorities.forEach(authority => {
            if(authority.code === 'cm-a'){
              currentUser.isAuthorized = true;
            }
          });

          currentUser.userData = res.content;

          this.authService.setLoggedUserDetail(currentUser);
          // localStorage.setItem(this.storage_name, JSON.stringify(currentUser));
          console.log('---------------------------- currentUser', currentUser);
          this.router.navigate([this.successUrl]);

        },
        error => {

          this.result = false;
          localStorage.removeItem(this.storage_name);

        }
      );

    },
      error => {
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
