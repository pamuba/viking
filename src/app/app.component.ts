import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts!:Post[]
  constructor(public apiService:ApiService){}
  ngOnInit(){
    this.apiService.getAllPosts().subscribe((res)=>{
      this.posts = JSON.parse(JSON.stringify(res))
      console.log(this.posts)
    })
  }
  title = 'viking';
}
