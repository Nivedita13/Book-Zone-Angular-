import { Component, OnInit } from '@angular/core';
import { Book } from './books.model';
import { BookService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books : Book[] = [];
  constructor(public bookService : BookService) { }

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

}
