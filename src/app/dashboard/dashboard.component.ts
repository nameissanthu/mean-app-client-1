import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
 
  constructor(private authservice:AuthService) { 

    
  }
   
  ngOnInit() {
   
    this.authservice.getProfile().subscribe(profile =>{
      this.user = profile.user; 
     
    },
    
    
    err =>{
    console.log(err);
    return false;
    
    });
  }

}
