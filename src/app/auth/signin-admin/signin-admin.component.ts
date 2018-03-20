import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.css']
})
export class SigninAdminComponent {

  @ViewChild("f") authForm : NgForm;
  
  username : string;
  password : string;

  constructor(private authService : AuthService) { }

  onSignin(){
    console.log(this.authForm);
    let data = this.authService.SignIn(this.authForm.value.username, this.authForm.value.password);  
  }

}
