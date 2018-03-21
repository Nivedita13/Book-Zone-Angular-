import { Component, OnInit } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../../../books/books.service';
import { Book } from '../../../books/books.model';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {

  book : Book;
  id : any;
  
  constructor(private http : Http,
              private router : Router,
              private bookService : BookService,
              private route : ActivatedRoute) { }

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
