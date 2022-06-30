import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service'

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  users:User[] =[];
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  public getInfo(){
    this.UserService.getInfo().subscribe(
      (responce)=>{
        this.users = responce ;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
