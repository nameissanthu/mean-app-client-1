import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
authToken:any;
user: any;
  constructor(private http:Http) { }

  registerUser(user){
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
      .map(res => res.json());
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
     .map(res => res.json());
  }
  getProfile(){
    let headers = new Headers();
    this.loadToken()
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', {headers: headers})
     .map(res => res.json());
  }
  
  loadToken(){
    const token =localStorage.getItem('id_token');
    this.authToken= token;
  }
  loggedIn(){
    return tokenNotExpired('id_token')
  }

  storeUserData(token, user){
     localStorage.setItem('id_token', token);
     localStorage.setItem('user', JSON.stringify(user)); 
     this.authToken = token;
     this.user = user;
  }
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
  updateStatus(task){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/api/task/'+task._id, JSON.stringify(task), {headers: headers})
        .map(res => res.json());
}
 
}
