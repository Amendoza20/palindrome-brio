import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAuthResponse } from '../models/jwt-auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private url: string;

  constructor(private httpClient: HttpClient, private localStrage: LocalStorageService) {
    this.url = environment.url;
   }

   //createNewUser(user: User): Observable<any> { return this.httpClient.post(this.url +"/newuser", user)}
   
   isAuthenticated(): boolean{
     return this.localStrage.retrieve('username') != null;
   }

   login(login: Login): Observable<any> {
     return this.httpClient.post<JwtAuthResponse>(this.url + '/login', login).pipe(map (data => {
       this.localStrage.store('authenticationToken', data.authenticationToken);
       this.localStrage.store('username', data.username);
       console.log("authorizing login");
       return true;
     }))
   }

   logout() {
     this.localStrage.clear('authenticationToken');
     this.localStrage.clear('username');
     return true;
   }

}
