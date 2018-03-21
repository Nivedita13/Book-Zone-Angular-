import { Injectable } from "@angular/core";
import { Http , Response} from "@angular/http";

@Injectable()

export class BookProfileService{

    constructor(public http : Http){} 
    

    getRequestedBook(bookid){

        this.http.get("http://localhost:3000/admin/requested_books/"+bookid).subscribe(
            (response : Response) => {
                
            }
        )

      }
}