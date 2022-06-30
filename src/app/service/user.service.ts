import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baserURL : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) {
  }
  getInfo():Observable<any>{
    return this.http.get(this.baserURL)
  }

}
