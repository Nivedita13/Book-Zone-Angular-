import { User } from "./all-users.model";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()

export class AllUserService{
     users : User[] = [];

    constructor(public http : Http){} 

    getUsers(){

        return  this.http.get("http://localhost:3000/admin/allusers").map(
                (response : Response) => {
                    if(response.json().err){
                            console.log(response.json().err);
                    }else{
                        var allUsers = response.json();
                        console.log("users are here",allUsers)
                        return allUsers;
                   }
                        
                }
            );  
      }
}
    