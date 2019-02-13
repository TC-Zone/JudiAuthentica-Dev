import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { UserService } from "../UserService.service";
import { Router } from "@angular/router";

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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    console.log(signinData);

    const userObj = localStorage.getItem("user_jwt_token");
    if (userObj) {
      console.log("LOCAL STORAGE");
      console.log(userObj);
    }
    console.log(userObj);

    // this.submitButton.disabled = true;
    // this.progressBar.mode = 'indeterminate';
    // this.result = this.userService.login(signinData);
    this.userService.login(signinData).subscribe(
      response => {
        console.log('_---------------------------- Sign in Function ------------------');

        console.log(response);
      },
      error => {
        console.log('_---------------------------- Sign in Function error ------------------');
        console.log(error);
        if (error.status === 401 || error.status === 403) {
          this.router.navigate([this.successUrl]);
        } else {
          // this.progressBar.mode = 'determinate';
          // this.signinForm.reset();
          // this.router.navigate([this.signInUrl]);
        }
      }
    );
    // console.log(this.result);
    // console.log(JSON.parse(localStorage.getItem("currentUser")));
    // if (this.result) {
    //   this.router.navigate([this.successUrl]);
    // } else {
    // this.progressBar.mode = "determinate";
    // this.signinForm.reset();
    // this.router.navigate([this.signInUrl]);
    // }
  }
}
