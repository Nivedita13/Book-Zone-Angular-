import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService) { }
  
  isloggedIn:Boolean;

  ngOnInit(){
    
    this.isloggedIn = this.authService.isloggedin();
    
    this.authService.loginstatus.subscribe
    (
       (status) =>{this.isloggedIn=status}
    )
  }
  

  onLogout(){
        this.authService.Logout();
  }

}
