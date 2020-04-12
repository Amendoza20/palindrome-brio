import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public user: User;
  
  constructor(private http: HttpClient, private router: Router) { }

  public getUser(){
    return this.http.get<User[]>(this.url + '/user');
  }

  public deleteUser(userId: number){
    return this.http.delete<Boolean>(this.url + '/user/' + userId);   
  }

  public findUserbyUsername(username: string){
    return this.http.get(this.url + '/user/' + username);
  }
}
