import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular31';
  name: string;
  sex:string;
  city:string;
  birthday:Date;

  ngOnInit(){
    
  }
  
  onSubmit() {
    this.name='';
    this.sex=''
    this.city='';
    this.birthday=null;
  }
}
