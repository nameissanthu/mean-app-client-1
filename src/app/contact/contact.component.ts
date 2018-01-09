import { Component, OnInit} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:any;
  name: string;
  email:string;
  subject:string;
  message:string;
 
 
 
  
  constructor( private contactservice:ContactService, private flashMessage:FlashMessagesService, 
    private validatesvs:ValidateService,
    private router:Router) { 
    this.contactservice.getTasks()
    .subscribe(contacts => {
        this.contacts = contacts;
    });
    
  }
  addTask(event){
    event.preventDefault();
    const newTask = {
        name: this.name,
        email:this.email,
        subject:this.subject,
        message:this.message,
       
        isDone: false
    }
    if(!this.validatesvs.validateEmail(newTask.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      
    this.contactservice.addTask(newTask)
    .subscribe(task => {
        this.contacts.push(task);
        this.router.navigate(['/success'])
    });
}




  ngOnInit() {
  }

}
