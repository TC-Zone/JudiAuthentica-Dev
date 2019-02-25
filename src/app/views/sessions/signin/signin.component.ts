import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton, MatSnackBar } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { UserService } from "../UserService.service";
import { Router } from "@angular/router";
import { authProperties } from './../../../shared/services/auth/auth-properties';
import { interval } from 'rxjs';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar)
  progressBar: MatProgressBar;
  @ViewChild(MatButton)
  submitButton: MatButton;

  signinForm: FormGroup;

  successUrl: string = "profile";
  signInUrl: string = "sessions/signin";
  result: boolean = true;
  private storage_name = authProperties.storage_name;


  // test
  public userId

  constructor(
    private userService: UserService,
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
    this.progressBar.mode = 'indeterminate';
    this.userService.login(signinData)
      .subscribe(response => {
        const tempUser = {
          id: response.user_id,
          username: 'contactpkumara@gmail.com',
          accountName: 'Kushan Pabasara',
          image: 'assets/images/cp_users/placeholder-user.png',
          token: response.access_token,
          refreshToken: response.refresh_token,
          company: 'Kushan Pabasara',
          expires_in: response.expires_in,
          userData: ''
        };
        localStorage.setItem(this.storage_name, JSON.stringify(tempUser));
        // this.getRefreshToken(response.expires_in * 1000);

        this.userService.getUserData(response.user_id)
          .subscribe(res => {
            const viewData =  res.content;
            tempUser.username = viewData.userName;
            tempUser.accountName = viewData.accountName;
            tempUser.company = viewData.client.name;
            tempUser.userData = res.content;
            localStorage.setItem(this.storage_name, JSON.stringify(tempUser));
            this.progressBar.mode = 'determinate';
            this.router.navigate([this.successUrl]);
          },
            error => {
              this.progressBar.mode = 'determinate';
              localStorage.removeItem(this.storage_name);
              this.snack.open('Invalid Credential', 'close', {
                duration: 2000
              });
            }
          );
      },
        error => {
          if (error.status === 400) {
            this.progressBar.mode = 'determinate';
            this.snack.open('Invalid Credential', 'close', {
              duration: 2000
            });
            this.signinForm.reset();
          } else {
            this.progressBar.mode = 'determinate';
            this.signinForm.reset();
            this.router.navigate([this.signInUrl]);
          }
        }
      );
  }




  getRefreshToken(refreshTime) {
    setTimeout(() => {
      const tempUser = JSON.parse(localStorage.getItem(this.storage_name));
      this.userService.getUserRefreshToken(tempUser.refreshToken)
        .subscribe(response => {
          tempUser.token = response.access_token;
          tempUser.refreshToken = response.refresh_token;
          tempUser.expires_in = response.expires_in;
          localStorage.setItem(this.storage_name, JSON.stringify(tempUser));
          this.getRefreshToken(response.expires_in * 1000);
        });
    }, refreshTime);
  }
}
