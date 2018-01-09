import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminAuth implements CanActivate {
isDone:boolean
  constructor(private auth:AuthService, private router:Router) { }


  canActivate(){
    if(this.auth.logout()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
