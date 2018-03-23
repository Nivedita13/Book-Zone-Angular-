import { Component, OnInit } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../../../books/books.service';
import { Book } from '../../../books/books.model';
import { FlashMessage } from 'angular-flash-message';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {

  book : Book;
  id : any;
  userNames : String[];
  gotBook:Boolean;
  
  constructor(private http : Http,
              private router : Router,
              private bookService : BookService,
              private route : ActivatedRoute,
              private flashmessage : FlashMessage) { }

  ngOnInit() {
     
    this.route.params.
    subscribe(
      (params : Params)=> {
        this.id = params['id'];
      }
    );

    
    this.bookService.getBookById(this.id).subscribe(
      (data) => {
                    this.book = data;
                    this.gotBook = true;
                    console.log("books from back "+data);
                  },
      (err) => {

            this.flashmessage.success("Book Could not fetched due to Internal Server Problem", { delay: 5000, generalClass: 'alert alert-class' });
            
            this.router.navigate(["/admin/requestedBooks"]);
      } ,                 
      () => {
          // retrieves usernames from backend service 
            this.userNames = this.bookService.getRequestedUser(this.book.requestedUser);    
        }
    );


  }

  getRequestedBook(){

    this.http.get("http://localhost:3000/admin/requested_books/:bookid").subscribe(
        (response : Response) => {
            var foundBook = response.json();
            console.log("foundbook" + foundBook);
        }
    )

  }

}
