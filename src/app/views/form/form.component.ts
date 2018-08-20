import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  constructor(private newform : FormService) { }

  public items: any[];
  ngOnInit() {    
    this.getItems();  
    
  }

  getItems() {
    this.newform.getItems().subscribe(
      successResp => {
        this.items = successResp;
        console.log(this.items);
      },
      error => {
        
      }
    );
  }

}
