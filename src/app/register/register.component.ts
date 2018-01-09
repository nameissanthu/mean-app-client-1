import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:string;
email:string;
username:string;
password:string;
isDone:boolean=false;
  constructor(private validatesvs:ValidateService,
   private flashMessage:FlashMessagesService,
  private authservice:AuthService,
  private router:Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user ={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
     
    }
    //reuired all field
    if(!this.validatesvs.validateRegister(user)){
      this.flashMessage.show("please fill in all fields", {cssClass:"alert-danger", timeout: 3000});
      return false;
    } 
    if(!this.validatesvs.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      
      this.authservice.registerUser(user).subscribe(data =>{
       if(data.success){
        this.flashMessage.show("You are now Registered and can log in", {cssClass:"alert-success", timeout: 3000});
        this.router.navigate(['/login']);
       }else{
        this.flashMessage.show("Something went wrong", {cssClass:"alert-danger", timeout: 3000});
        this.router.navigate(['/register']);
       }
      });
  }



}
