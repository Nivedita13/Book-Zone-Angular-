import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../books.service';
import { Book } from '../books.model';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  id : number;
 
  @ViewChild("f") bookForm : NgForm;

  name : string;
  subject : string;
  author : string;
  book_id : number;
  copies : number;


  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    
    this.route.params.
    subscribe(
      (params : Params)=> {
        this.id = params['id'];
      }
    );

    
    this.bookService.getBookById(this.id).subscribe(
      (data) => {
            this.name = data.name;
            this.subject= data.subject;
            this.author = data.author;
            this.book_id = data.id;
            this.copies = data.copies;
      }
    );
 
  }
 
  onEdit(){
    
    this.bookService.editBook(this.id, this.bookForm.value);

  }

}

  


