import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../UserService.service";

import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-user-activation",
  templateUrl: "./user-activation.component.html"
})
export class UserActivationComponent implements OnInit {
  activationForm: FormGroup;
  activationCode: string;
  errorObj: any;
  public result = false;
  public errorMsg = "The password must contain at least 6 characters !";

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
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
      password: new FormControl("", Validators.required)
    });
  }

  activateUser() {
    console.log('CALLED activate');
    if (100 > this.activationForm.value.password.length && this.activationForm.value.password.length > 6) {
      this.userService
        .activateUser(this.activationCode, this.activationForm.value)
        .subscribe(
          response => {
            console.log("SUCCESS ACTIVATION");
            this.result = false;
            this.snack.open("User Activated !", "OK", { duration: 3000 });
            this.router.navigate(['sessions/signin']);
          },
          error => {
            if (error.error.validationFailures[0].code === "userActivationRequest.alreadyActivated") {
              this.errorMsg = "User Already Activated !";
              this.result = true;
            }
          }
        );
    } else {
      this.errorMsg = "The password must contain at least 6 characters !";
      this.result = true;
    }
  }

  submit() {
    console.log('CALLED activate');
  }
}
