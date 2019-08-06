import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton, MatSnackBar } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { authProperties } from "./../../../shared/services/auth/auth-properties";
import { interval } from "rxjs";

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

  // test
  public userId;
  public counter = 0;

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
    const userObj = JSON.parse(localStorage.getItem(this.storage_name));
    if (userObj) {
      localStorage.removeItem(this.storage_name);
    }
    const signinData = this.signinForm.value;

    this.submitButton.disabled = true;
    // this.progressBar.mode = 'indeterminate';
    this.authService.login(signinData)
      .subscribe(response => {
        console.log('---------------------------- response', response);

        const tempUser = {
          id: response.user_id,
          username: "contactpkumara@gmail.com",
          accountName: "Kushan Pabasara",
          image: "assets/images/cp_users/placeholder-user.png",
          token: response.access_token,
          refreshToken: response.refresh_token,
          company: "",
          expires_in: response.expires_in,
          userData: ""
        };
        localStorage.setItem(this.storage_name, JSON.stringify(tempUser));

        this.authService.getLoggedUserData(response.user_id).subscribe(
          res => {
            const viewData = res.content;
            tempUser.username = viewData.userName;
            tempUser.accountName = viewData.accountName;
            tempUser.userData = res.content;
            tempUser.company = viewData.client.name;
            localStorage.setItem(this.storage_name, JSON.stringify(tempUser));
            console.log('---------------------------- tempUser', tempUser);
            // this.progressBar.mode = 'determinate';
            this.router.navigate([this.successUrl]);
            // const expireInMilliSecond = (response.expires_in - 2) * 1000;
            // this.getRefreshToken(expireInMilliSecond);
            // this.getRefreshToken(10000);
          },
          error => {
            this.result = false;
            // this.progressBar.mode = 'determinate';
            localStorage.removeItem(this.storage_name);
          }
        );
      },
        error => {
          this.result = false;
          if (error.status === 400) {
            // this.progressBar.mode = 'determinate';
            this.signinForm.reset();
          } else {
            // this.progressBar.mode = 'determinate';
            this.signinForm.reset();
            this.router.navigate([this.signInUrl]);
          }
        }
      );
  }

  // getRefreshToken(refreshTime) {
  //   setTimeout(() => {
  //     console.log('Set Time out function');
  //     const tempUser = JSON.parse(localStorage.getItem(this.storage_name));
  //     this.userService.getUserRefreshToken(tempUser.refreshToken)
  //       .subscribe(response => {
  //         this.counter += 1;
  //         console.log('Refresh count = ' + this.counter);
  //         tempUser.token = response.access_token;
  //         tempUser.refreshToken = response.refresh_token;
  //         tempUser.expires_in = response.expires_in;
  //         localStorage.setItem(this.storage_name, JSON.stringify(tempUser));
  //         const expireInMilliSecond = (response.expires_in - 2) * 1000;
  //         this.getRefreshToken(expireInMilliSecond);
  //       },
  //         error => {
  //           console.log('Refresh Token Error');
  //           this.getRefreshToken(refreshTime);
  //         });
  //   }, refreshTime);
  // }
}
