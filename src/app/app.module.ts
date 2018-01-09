import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ValidateService } from './validate.service';
import { FlashMessagesModule} from 'angular2-flash-messages';  
import { AuthService } from './auth.service';
import { Authguard } from './authguard.service';
import { CapitalizeFirstPipe } from './capitalizefirst.pipe';

import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { AdminComponent } from './admin/admin.component';
import { AdminAuth } from './admin-auth.service';
import { SuccessComponent } from './success/success.component';
import { SearchFilterPipe } from './searchFilterPipe';
import { RegisteredComponent } from './registered/registered.component';
import { UsersComponent } from './users/users.component';
import { AdminuserComponent } from './adminuser/adminuser.component';

 
const routes =([{path:'', component:HomeComponent},
{path:'dashbord', component:DashboardComponent, canActivate:[Authguard]},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'contact',component:ContactComponent, canActivate:[Authguard]},
{path:'profile', component:ProfileComponent, canActivate:[Authguard]},
{path:'success', component:SuccessComponent, canActivate:[Authguard]},
{path:'admin', component:AdminComponent, canActivate:[Authguard]},
{path:'registered', component:RegisteredComponent, canActivate:[Authguard]},
{path:'useradmin', component:AdminuserComponent, canActivate:[Authguard]}])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    CapitalizeFirstPipe,
    SearchFilterPipe,
    
    ContactComponent,
    AdminComponent,
    SuccessComponent,
    RegisteredComponent,
    UsersComponent,
    AdminuserComponent,
    

  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    HttpModule,
   

  ],
  providers: [ValidateService,AuthService, Authguard,ContactService, AdminAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
