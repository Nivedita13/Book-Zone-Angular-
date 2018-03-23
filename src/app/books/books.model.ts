export class Book{
    public name : string;
    public subject : string;
    public author : string;
    public id : number;
    public copies : number;
    public requestedUser : string[];

    constructor(name : string, subject : string, author : string, id : number, copies : number, requestedUser : string[]){
    this.name = name;
    this.subject = subject;
    this.author = author;
    this.id = id;
    this.copies = copies;
    this.requestedUser = requestedUser;
}

}  