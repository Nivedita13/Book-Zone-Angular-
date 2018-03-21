import { Book } from "./books.model";
import { Http,
         Headers,
         Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()

export class BookService{
    // booksChanged = new Subject<Book[]>();
    books : Book[] = [];

    constructor(public http : Http){
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

    }

    getBookById(id :number){
       return this.http.get("http://localhost:3000/book/edit/"+id)
            .map( response =>{
                return response.json();
            }
        )
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