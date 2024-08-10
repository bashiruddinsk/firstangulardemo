import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangulardemo';
  nameFromChild:string='';
  constructor(private router: Router){

  }
  register(){
    console.log(' from register');
    this.router.navigate(['register']);
  }
  forgotpassword(){
    console.log( ' from forgotPassword ');
    this.router.navigate(['forgotpassword']);
  }  
  login(){
    console.log(' from login ');

  }
}