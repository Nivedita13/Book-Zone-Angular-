import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './books/books.service';
import { HttpModule } from '@angular/http';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { NewBookComponent } from './admin/new-book/new-book.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditbookComponent } from './books/editbook/editbook.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { SignupComponent } from './auth/signup/signup.component';
import { RequestedBooksComponent } from './admin/requested-books/requested-books.component';
import { ReqestedBooksService } from './admin/requested-books/requested-books.service';
import { BookProfileComponent } from './admin/requested-books/book-profile/book-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninAdminComponent } from './auth/signin-admin/signin-admin.component';
import {  FlashMessageModule } from 'angular-flash-message';
import { userAuthService } from './auth/user.auth.service';
import { adminAuthService } from './auth/admin.auth.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AllUsersComponent,
    NewBookComponent,
    SigninComponent,
    EditbookComponent,
    AuthComponent,
    SignupComponent,
    RequestedBooksComponent,
    BookProfileComponent,
    WelcomeComponent,
    SigninAdminComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessageModule
  ],
  providers: [BookService, AuthService, ReqestedBooksService, userAuthService, adminAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
