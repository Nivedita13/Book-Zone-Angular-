import { Book } from "./books.model";
import { Http,
         Headers,
         Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Router } from "@angular/router";

@Injectable()

export class BookService{
    // booksChanged = new Subject<Book[]>();
    books : Book[] = [];

    constructor(public http : Http,
                private router : Router){
        this.http.get("http://localhost:3000/allbooks").map(
            (response: Response) => {
                this.books.push(...response.json());
            }
        )
    }
    

    allBook(){
        return this.http.get("http://localhost:3000/allbooks").map(
            (response : Response) => {
                var bookFetched = response.json();
                this.books = response.json();
                return bookFetched;
            }
        );
    }

    CreateBook(book: Book){
       
        
        let header = new Headers();
        header.append('Content-Type','application/json');
        header.append('Authorization',localStorage.getItem('id_token'));

        this.http.post("http://localhost:3000/books_entry",book,{headers:header}).subscribe(
            (response : Response) => {
                console.log("books",response.json());
            }
        );
        this.router.navigate(['/admin']);

    }

    getBookById(id :number){
       return this.http.get("http://localhost:3000/book/edit/"+id)
            .map( response =>{
                return response.json();
            }
        )
    }

    getRequestedUser(userIdlist: String[]){
       
        var usernames = [];
        var flag : Boolean;

        for(var i=0;i<userIdlist.length;i++){
          
            this.http.get("http://localhost:3000/admin/"+userIdlist[i]).map(
                (response:Response)=>{
                    if(response.json().success){
                        console.log(response.json().username);        
                        usernames.push(response.json().username);                    
                    }else{
                        console.log(response.json().message);
                    }
                        
                }
            ).subscribe();

            if(i == userIdlist.length-1){
                flag = true;
            }          
        }
            return usernames;
}

    editBook(index : number, book : Book){
        
        let header = new Headers();
        header.append('Content-Type','application/json');
        this.http.put("http://localhost:3000/book/"+index,book,{headers:header}).subscribe(
            (response : Response) => {
                console.log("response",response.json());
            }
            
        );
    }

    issueBook(bookId){
        let userId = JSON.parse(localStorage.getItem('user')).userid;
                 
            let issueDetails = {
                'username' : userId,
                'bookId' : bookId
            }

        this.http.get("http://localhost:3000/issue/"+bookId+"/"+userId).subscribe(
            (response : Response) => {
                
            }
        );
            
    }

  

}