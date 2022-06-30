import { ElementSchemaRegistry } from "@angular/compiler";

export class Post {
    id : number ;
    subject : string ;
    description : string ;
    auther : string ;
    city : string;

    constructor( id : number ,subject : string , description : string , auther : string , city : string){
        this.id = id;
        this.subject = subject;
        this.description = description;
        this.auther =auther;
        this.city = city;
    }
}