import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
  contacts:any;
  constructor(private contactsvs:ContactService, private router:Router) { 

    this.contactsvs.getTasks().subscribe(contacts =>{
      this.contacts = contacts
    })
  }

  deleteTask(id){
    var contact = this.contacts;
    
    this.contactsvs.deleteTask(id).subscribe(data => {
        if(data.n == 1){
            for(var i = 0;i < contact.length;i++){
                if(contact[i]._id == id){
                    contact.splice(i, 1);
                   
                }
                
            }
        }
    });
}

  ngOnInit() {
  }

}
