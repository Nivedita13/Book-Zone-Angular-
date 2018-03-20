import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @ViewChild("f") authForm : NgForm;

  constructor(private authService : AuthService,
              private router : Router) { }

  onSignup(){
    console.log(this.authForm);
      let data = this.authService.SignUp(this.authForm.value.username, this.authForm.value.password,this.authForm.value.email);  
    }

}
