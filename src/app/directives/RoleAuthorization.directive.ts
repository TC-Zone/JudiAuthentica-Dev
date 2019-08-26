import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';
import { authProperties } from "../shared/services/auth/auth-properties";
import { AuthenticationService } from 'app/views/sessions/authentication.service';

@Directive({
  selector: "[roleAuthorization]"
})
export class RoleAuthorization implements OnInit {

  private storage_name = authProperties.storage_name;
  public userAuthorities: any[];
  public predefined = "false";

  @Input() roleAuthorization: string;

  constructor(
    private el: ElementRef,
  ) {
    let role = JSON.parse(localStorage.getItem(this.storage_name)).userData.role;
    this.predefined = role.predefined;
    this.userAuthorities = role.authorities;
  }
  ngOnInit() {
    this.el.nativeElement.style.display = 'none';

    if (this.roleAuthorization === "isPredefined") {
      if (this.predefined === "true") {
        this.el.nativeElement.style.display = 'block';
      }
    } else {
      this.userAuthorities.forEach((item) => {
        if (item.code === this.roleAuthorization) {
          this.el.nativeElement.style.display = 'block';
        }
      });
    }
  }
}

// @Directive({
//   selector: "[adminAuthorization]"
// })
// export class AdminAuthorization implements OnInit {
//   private storage_name = authProperties.storage_name;
//   public predefined = "false";

//   // @Input() adminAuthorization: string;
//   constructor(private el: ElementRef) {
//     let role = JSON.parse(localStorage.getItem(this.storage_name)).userData.role;
//     this.predefined = role.predefined;
//   }

//   ngOnInit() {
//     this.el.nativeElement.style.display = 'none';
//     if (this.predefined === "true") {
//       this.el.nativeElement.style.display = 'block';
//     }
//   }
// }
