import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        username:['', Validators.required],
        email:['', Validators.required, Validators.email],
        ConfirmEmail:['', Validators.required],
        password:['', Validators.required, Validators.minLength, Validators.maxLength],
        ConfirmPassword:['', Validators.required]
       }
    );
    }
  
  ngOnInit(): void {
  }
  
  passwordValidation(){
    const { value: password } = this.newUserForm.get('password');
    const { value: ConfirmPassword } = this.newUserForm.get('ConfirmrPassword');
    return password === ConfirmPassword ? null : { passwordNotMatch: true};
  } 

  emailValidation(){
    const { value : email } = this.newUserForm.get('email');
    const { value: ConfirmEmail } = this.newUserForm.get('ConfirmEmail');
    return email === ConfirmEmail ? null: { emailNotMathc: true };
  }

  onSubmit(){
    if (this.passwordValidation() && this.emailValidation()){
    this.user.firstName = this.newUserForm.get('firstName').value;
    this.user.lastName = this.newUserForm.get('lastName').value;
    this.user.username = this.newUserForm.get('username').value;
    this.user.email = this.newUserForm.get('email').value;
    this.user.password = this.newUserForm. get('password').value;
    //still need to store data
    console.log("User info added");
    }
    console.log("something wasn't right");
  }
}
