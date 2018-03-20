import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { NgIf } from '@angular/common';
import { FlashMessage } from 'angular-flash-message';


@Injectable()

export class AuthService{
    
    constructor(private http : Http,
                private router : Router,
                private flashmessage : FlashMessage){}


    SignIn(username : string, password : string){
        let User = {
            username: username,
            password: password
        }
        let header = new Headers();
        header.append('Content-Type','application/json');

        this.http.post("http://localhost:3000/decision/login",User,{headers:header}).subscribe(
            (response : Response) => {
                let res=response.json();
                if (res.success) {

                    localStorage.setItem('id_token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.flashmessage.success("loggedin sucessfully", { delay: 5000, generalClass: 'alert alert-success' });
                    if (JSON.parse(localStorage.getItem('user')).type == 'admin') {
                        this.router.navigate(['/admin']);
                    }
                    else {
                        this.router.navigate(['/user'])
                    }

                } else {
                    this.flashmessage.success("Please enter valid details", { delay: 5000, generalClass: 'alert alert-danger' });

                }
            }
        );

    }

    SignUp(username : string, password : string, email : string){
        let User = {
            'username'          : username,
            'password'          : password,
            'email'             : email,
            'type'              : 'user',
            'requested_books'   : [],
            'books_have'        : []
            
        };

        let header = new Headers();
        header.append('Content-Type','application/json');

        this.http.post("http://localhost:3000/decision/user_signup",User,{headers:header}).subscribe
            (response => {
                if(response.json().error){
                    this.flashmessage.danger(response.json().msg,{delay:5000,generalClass:'alert alert-success'});
                }else{
                    let res=response.json();
                    localStorage.setItem('id_token',res.token);
                    localStorage.setItem('user',JSON.stringify(res.user));
                    this.flashmessage.success(response.json().msg,{delay:5000,generalClass:'alert alert-success'});
                    this.router.navigate(['/user']);
                }
            }
            
        )

    }

    Logout(){
        localStorage.clear();
        this.router.navigate(['/signin']);
        this.flashmessage.success("Successfully Logged out", { delay: 5000, generalClass: 'alert alert-success' });        
        }
}