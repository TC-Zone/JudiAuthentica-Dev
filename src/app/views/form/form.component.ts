import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import {map, startWith, debounceTime, switchMap}from 'rxjs/operators';
import { Clients,Content } from '../../model/ClientModel.model';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    
  filteredClient: Observable<Clients>;
  userForm: FormGroup;  

  constructor(private fb:FormBuilder,private newform : FormService) { }
    
  ngOnInit() {    
    this.userForm = this.fb.group({
      userInput:null
    })
    this.filteredClient = this.userForm.get('userInput').valueChanges
    .pipe(
      debounceTime(300),
      switchMap(value => 
        this.newform.search({name:value},1       
        ))  
            
    );
    console.log();
     
  }

  

  

  

}
