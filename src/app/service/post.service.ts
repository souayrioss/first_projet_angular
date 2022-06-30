import { Injectable } from '@angular/core';
import {Post} from '../models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Post[]=[];

  constructor() {
    this.getPosts();
  }

  getPosts(){
    this.posts  = [
      new Post(1 ,"subject" , "description"  , "auther"  , "city"),
      new Post(2 ,"subject2" , "description2"  , "auther2"  , "city2"),
      new Post(3 ,"subject3" , "description3"  , "auther3"  , "city3"),
    ];
    return this.posts;
  }
  getPostById(id : number){
    var result = this.posts.filter(obj=>{
      return obj.id === id
    })
    return result;
  }
  
}
