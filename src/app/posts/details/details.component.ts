import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Post } from '../../models/post';
import { PostService } from '../../service/post.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id : any ;
  post:any;
  PostService;
  constructor( private route : ActivatedRoute) { 
    this.PostService = new PostService();
    this.PostService.getPostById(this.id);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id = params.get('id')
    })
    this.post = this.PostService.getPostById(Number(this.id));
    console.log(this.post)
  }

}
