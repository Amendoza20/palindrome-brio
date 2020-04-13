import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private router: Router){
  
    this.user = new User;

    this.newUserForm = this.formBuilder.group(
      {
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        reEnterEmail:'',
        password:'',
        reEnterPassword:'',
       }
    );

    

   }
  

  ngOnInit(): void {
  }
  onSubmit(){
    this.user.firstName = this.newUserForm.get('firstName').value;
    this.user.lastName = this.newUserForm.get('lastName').value;
    this.user.username = this.newUserForm.get('username').value;
    this.user.email = this.newUserForm.get('email').value;
    this.user.password= this.newUserForm.get('password').value;
  }
}
