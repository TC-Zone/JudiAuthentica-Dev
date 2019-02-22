import { Component, OnInit, Input } from '@angular/core';
import { egretAnimations } from 'app/shared/animations/egret-animations';


@Component({
  selector: 'app-user-comunity',
  templateUrl: './user-comunity.component.html',
  animations: egretAnimations
})
export class UserComunityComponent implements OnInit {

  public status = 'Active';
  public useDefault = true;
  constructor() { }

  ngOnInit() {

  }

  toggleSwitch(event) {
    if (this.useDefault) {
      this.useDefault = false;
      this.status = 'Active';
    } else {
      this.useDefault = true;
      this.status = 'Deactive';
    }
  }

}
