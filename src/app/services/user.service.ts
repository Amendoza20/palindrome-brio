import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;
  user: User;
  
  constructor(
    private http: HttpClient, 
    private storageService: LocalStorageService, 
    private router: Router
    ) {

  this.url = environment.url;
  }

  createNewUser(user: User){
    return this.http.post(this.url + '/newuser', user);

  }
  getUser(){
    return this.http.get<User>(this.url + '/newuser');
  }

  deleteUser(userId: number){
    return this.http.delete<Boolean>(this.url + '/newuser/' + userId);   
  }

  findUserbyUsername(username: string){
    return this.http.get(this.url + '/newuser/' + username);
  }

  login(login: Login): Observable<boolean> {
    return this.http.post<JwtAuthResponse>('/login', login).pipe( map (data => {
      this.storageService.store('authenticationToken', data.authenticationToken);
      this.storageService.store('username', data.username);
      return true;
    }));
  
  }

  logout(){
    this.storageService.clear('authenticationToken');
    this.storageService.clear('username');
  }

  authenticaited(){
    return this.storageService.retrieve('username') != null;
  }
}
