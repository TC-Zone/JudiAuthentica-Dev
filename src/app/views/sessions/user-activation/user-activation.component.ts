import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";

import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { GlobalVariable } from "app/shared/helpers/global-variable";

@Component({
  selector: "app-user-activation",
  templateUrl: "./user-activation.component.html",
  styleUrls: ["./user-activation.component.scss"]
})
export class UserActivationComponent implements OnInit {
  activationForm: FormGroup;
  activationCode: string;
  errorObj: any;
  public result = false;
  public errorMsg = "Password field must have at least 8 characters including at least two letters, one number or special character !";
  public regex = new GlobalVariable().validators.regex;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params["code"]);
      this.activationCode = params["code"];
    });
    this.buildActivationForm();
  }

  buildActivationForm() {
    this.activationForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern(this.regex._Password)])
    });
  }


  activateUser() {
    console.log("CALLED activate");
    let result = this.activationForm.value.password.match(this.regex._Password);
    if (result && result.length > 0) {
      this.authService
        .activateUser(this.activationCode, this.activationForm.value)
        .subscribe(
          response => {
            console.log("SUCCESS ACTIVATION");
            this.result = false;
            this.snack.open("User Activated !", "OK", { duration: 3000 });
            this.router.navigate(["sessions/signin"]);
          },
          error => {
            if (error.status === 500) {
              console.log("SUCCESS ACTIVATION With 500 Error");
              this.result = false;
              this.snack.open("User Activated !", "OK", { duration: 3000 });
              this.router.navigate(["sessions/signin"]);
            } else {
              if (error.error.validationFailures[0].code === "userActivationRequest.alreadyActivated") {
                this.errorMsg = "User Already Activated !";
                this.result = true;
              }
            }
          }
        );
    } else {
      this.errorMsg = "Password field must have at least 8 characters including at least two letters, one number or special character !";
      this.result = true;
    }
  }

  submit() {
    console.log("CALLED activate");
  }
}
