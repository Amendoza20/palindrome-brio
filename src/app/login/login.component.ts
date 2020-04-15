import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;

  constructor(
    private service: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router
    
    ){
  
    this.login = new Login;

    this.loginForm = this.formBuilder.group(
      {
        username:['', Validators.required],
        password:['', Validators.required]
      }
    );
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.login.username = this.loginForm.get('username').value;
    this.login.password = this.loginForm.get('password').value;
    
    this.service.login(this.login).subscribe(data => {
      if (data) {
        console.log("login passed");
      }else { console.log("login failed");
    }
    });
  }
}
