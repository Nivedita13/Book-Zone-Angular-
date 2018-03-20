import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  @ViewChild("f") authForm : NgForm;
  
  username : string;
  password : string;

  constructor(private authService : AuthService) { }

  onSignin(){
    console.log(this.authForm);
    let data = this.authService.SignIn(this.authForm.value.username, this.authForm.value.password);  
  }

}
