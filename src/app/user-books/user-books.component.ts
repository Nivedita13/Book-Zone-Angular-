import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/books.service';
import { Book } from '../books/books.model';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
  books : Book[] = [];

  constructor(private bookService : BookService,
              private http : Http) { }

  ngOnInit() {
    this.bookService.allBook().subscribe(
      (book) => {
        // console.log(book);

        this.books.push(...book);
      },
      err => {
        console.log(err);
      }
    )
  }

  onIssue(bookId){
      this.bookService.issueBook(bookId);
  }

}
