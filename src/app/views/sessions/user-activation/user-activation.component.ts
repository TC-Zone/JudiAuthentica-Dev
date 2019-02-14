import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../UserService.service";

@Component({
  selector: "app-user-activation",
  templateUrl: "./user-activation.component.html"
})
export class UserActivationComponent implements OnInit {
  activationForm: FormGroup;
  activationCode: string;

  errorObj: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

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
    this.userService
      .activateUser(this.activationCode, this.activationForm.value)
      .subscribe(
        response => {
          console.log("SUCCESS ACTIVATION");
        },
        error => {
          this.errorObj = error;
        }
      );
  }
}
