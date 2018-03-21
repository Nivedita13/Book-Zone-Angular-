import { RequestedBooks } from './requested-books.model';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";

@Injectable()

export class ReqestedBooksService{
     requestedBooks : RequestedBooks[] = [];

    constructor(public http : Http){}   

    getRequestedUsers(){

        return  this.http.get("http://localhost:3000/admin/requested_books").map(
                (response : Response) => {
                    var foundBooks = response.json();
                    console.log("requested books are here",foundBooks)
                    return foundBooks;
    
                }
            );  
      }

      
}
    