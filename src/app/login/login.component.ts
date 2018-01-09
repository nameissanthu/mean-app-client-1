import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  

  constructor(private authservice:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
  }
  onLoginSubmit(){
   const user ={
     username:this.username,
     password:this.password,
     
   }
   this.authservice.authenticateUser(user).subscribe(data=>{
     if(data.success){
       this.authservice.storeUserData(data.token, data.user);
       this.flashMessage.show('You are now logged in', {
        cssClass:'alert-success', 
        timeout:3000});
        this.router.navigate(['dashbord'])
     }else{
       this.flashMessage.show(data.msg, {
         cssClass:'alert-danger', 
         timeout:3000});
         this.router.navigate(['login'])
     }
   })
  }
 

}
