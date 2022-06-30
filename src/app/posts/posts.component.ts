import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[];
  PostService;
  constructor() { 
    this.PostService = new PostService();
    this.posts = this.PostService.getPosts();
  }

  ngOnInit(): void {
  }
  getPosts(){
    this.posts = this.PostService.getPosts();
  }
}
