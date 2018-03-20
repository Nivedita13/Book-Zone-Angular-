import { Component, OnInit } from '@angular/core';
import { ReqestedBooksService } from './requested-books.service';
import { Http } from '@angular/http';
import { RequestedBooks } from './requested-books.model';

@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {
  RequestedBooks : RequestedBooks[] = [];    

  constructor(public http : Http,
              public requestedBooksService : ReqestedBooksService) { }

  ngOnInit() {
    this.requestedBooksService.getRequestedUsers().subscribe(

      (foundBooks) => {
        console.log(foundBooks);
        this.RequestedBooks.push(...foundBooks);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
