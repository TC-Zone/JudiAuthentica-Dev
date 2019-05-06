import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';
import { authProperties } from "../shared/services/auth/auth-properties";

@Directive({
  selector: "[roleAuthorization]"
})
export class RoleAuthorization implements OnInit {

  private storage_name = authProperties.storage_name;
  public userAuthorities: any[];

  @Input() roleAuthorization: string;

  constructor(private el: ElementRef) {
    this.userAuthorities = JSON.parse(localStorage.getItem(this.storage_name)).userData.role.authorities;
  }

  ngOnInit() {
    this.el.nativeElement.style.display = 'none';
    this.userAuthorities.forEach((item) => {
      if (item.code === this.roleAuthorization) {
        // console.log('-------------------------------- item.code', this.roleAuthorization);
        console.log('-------------------------------- item.code', item.code);
        this.el.nativeElement.style.display = 'block';
      }
    });
  }

}
