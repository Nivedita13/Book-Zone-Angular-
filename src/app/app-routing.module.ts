import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { NewBookComponent } from './admin/new-book/new-book.component';
import { EditbookComponent } from './books/editbook/editbook.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RequestedBooksComponent } from './admin/requested-books/requested-books.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninAdminComponent } from './auth/signin-admin/signin-admin.component';
import { userAuthService } from './auth/user.auth.service';
import { adminAuthService } from './auth/admin.auth.service';


const appRoutes : Routes = [
    { path : '' , component : HomeComponent },
    { path : 'signin' , component: SigninComponent },
    { path : 'signup' , component: SignupComponent },
    { path : 'signinAdmin' , component: SigninAdminComponent },                                                                                            
    { path : 'admin', component : AdminComponent,canActivate:[adminAuthService],
        children:[
            { path : '' , component : WelcomeComponent },           
            { path : 'books' , component : BooksComponent },
            { path : 'allUsers' , component : AllUsersComponent },
            { path : 'newBook' , component : NewBookComponent },
            { path : 'books/:id' , component: EditbookComponent },
            { path : 'requestedBooks' , component: RequestedBooksComponent },            
        ] },
    { path : 'user' , component : UserComponent,canActivate:[userAuthService],
        children:[
            { path : '' , component : WelcomeComponent },                       
            { path : 'books' , component : BooksComponent }                                               
        ]
    }   
   ];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}   