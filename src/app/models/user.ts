import { ElementSchemaRegistry } from "@angular/compiler";

export class User {
    id : number ;
    userId : number ;
    title : string ; 
    body : string;

    constructor( id : number ,userId : number , title : string , body : string ){
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body =body;
    }
}