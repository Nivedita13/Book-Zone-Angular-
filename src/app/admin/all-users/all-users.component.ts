import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './all-users.model';
import {AllUserService} from  './all-users.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  providers :[AllUserService]
})
export class AllUsersComponent implements OnInit {
  Users : User[] = [];  

  constructor(public http : Http,
  private alluserService:AllUserService) { }

  ngOnInit() {
    
    this.alluserService.getUsers().subscribe(

      (allUsers) => {
        this.Users.push(...allUsers);
      }
    )
       
  }

 }
