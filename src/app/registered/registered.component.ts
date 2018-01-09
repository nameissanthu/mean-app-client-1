import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  registers:any;
  constructor(private contactsvs:ContactService) { 
    this.contactsvs.getRegisters().subscribe(registers =>{
      this.registers=registers
    })
  }

  ngOnInit() {
  }

}
