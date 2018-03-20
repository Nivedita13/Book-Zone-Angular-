import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,
         FormControl  } from '@angular/forms';
import { BookService } from '../../books/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent{
  @Input() index : number;

  bookForm : FormGroup = new FormGroup({
    'name' : new FormControl(),
    'subject' : new FormControl(),
    'author' : new FormControl(),    
    'id' : new FormControl(),
    'copies' : new FormControl()
  });


  constructor(public bookService:BookService){}

  onCreate(){
    this.bookService.CreateBook(this.bookForm.value);
  }
  
  onEdit(){
    // this.bookService.editBook(this.bookForm.value);
  }

}
