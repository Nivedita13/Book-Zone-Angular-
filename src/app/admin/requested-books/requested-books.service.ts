import { RequestedBooks } from './requested-books.model';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()

export class ReqestedBooksService{
     requestedBooks : RequestedBooks[] = [];

    constructor(public http : Http){}   

    getRequestedUsers(){

        return  this.http.get("http://localhost:3000/admin/requestedbooks").map(
                (response : Response) => {
                    var foundBooks = response.json();
                    return foundBooks;
    
                }
            );  
      }

      
}
    