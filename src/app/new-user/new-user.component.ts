import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  user: User;
  
  constructor(
    private service: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router
    
    ){
  
    this.user = new User;

    this.newUserForm = this.formBuilder.group(
      {
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        username:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        confirmEmail:['', Validators.required],
        password:['', Validators.required],
        confirmPassword:['', Validators.required]
       }
    );
    }
  
  ngOnInit(): void {
  }
  
  passwordValidation(){
    var password = this.newUserForm.get('password').value;
    var confirmPassword = this.newUserForm.get('confirmPassword').value;
    return password === confirmPassword;
  }

  emailValidation(){
    var email = this.newUserForm.get('email').value;
    var confirmEmail = this.newUserForm.get('confirmEmail').value;
    return email === confirmEmail;
  }

  onSubmit(){
    if (this.passwordValidation() && this.emailValidation()) {
    
    this.user.firstName = this.newUserForm.get('firstName').value;
    this.user.lastName = this.newUserForm.get('lastName').value;
    this.user.username = this.newUserForm.get('username').value;
    this.user.email = this.newUserForm.get('email').value;
    this.user.password = this.newUserForm. get('password').value;

    this.service.createNewUser(this.user).subscribe(data => {
      console.log("sending out");
      alert("User Created!");
      this.router.navigateByUrl('newuser');
    });
    } 
    console.log("validated")
     

  }
}
