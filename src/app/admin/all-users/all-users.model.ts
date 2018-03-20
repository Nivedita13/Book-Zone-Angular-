export class User{
   public username :  string;
   public email    :  string;
   public type     :  string;
   public password :  string;
   public requestedBooks : string[];
   public booksHave  : string[];

    constructor(username : string, email : string, type : string, password : string, requestedBooks : string[], booksHave : string[]){
    this.username = username;
    this.email = email;
    this.type = type;
    this.password = password;
    this.requestedBooks = requestedBooks;
    this.booksHave = booksHave;
}

}