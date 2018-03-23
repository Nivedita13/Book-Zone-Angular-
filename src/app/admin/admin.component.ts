import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onAdminAllBooks(){
    this.router.navigate(['admin/books']);
  }

  onAllUsers(){
    this.router.navigate(['admin/allUsers']);
  }

  onCreateBook(){
    this.router.navigate(['admin/newBook']);
  }

  onRequestedBooks(){
    this.router.navigate(['admin/requestedBooks']);    
  }

}
