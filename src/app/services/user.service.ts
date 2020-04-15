import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public user: User;
  
  constructor(private http: HttpClient, private router: Router) {
  this.url = environment.url;
  }

  public createNewUser(user: User){
    return this.http.post(this.url + '/newuser', user);

  }
  public getUser(){
    return this.http.get<User>(this.url + '/newuser');
  }

  public deleteUser(userId: number){
    return this.http.delete<Boolean>(this.url + '/newuser/' + userId);   
  }

  public findUserbyUsername(username: string){
    return this.http.get(this.url + '/newuser/' + username);
  }
}
