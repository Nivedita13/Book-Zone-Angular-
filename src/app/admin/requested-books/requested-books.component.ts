import { Component, OnInit } from '@angular/core';
import { ReqestedBooksService } from './requested-books.service';
import { Http } from '@angular/http';
import { RequestedBooks } from './requested-books.model';
import { BookProfileService } from './book-profile/book-profile.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {
  RequestedBooks : RequestedBooks[] = [];    

  constructor(private http : Http,
              private requestedBooksService : ReqestedBooksService,
              private bookProfileService : BookProfileService,
              private router : Router,
              private route : ActivatedRoute) { }

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

  onBookProfile(bookId){
    this.bookProfileService.getRequestedBook(bookId);
    this.router.navigate([bookId],{relativeTo : this.route});
  }

}
