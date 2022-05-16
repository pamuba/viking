import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts!:Post[]
  public flag : boolean = false

  constructor(public router:Router) { }

  public id!:Number
  ngOnInit(): void {
  }

  public gotoProductDetails(id:any) {
    this.id = id
    this.flag = true
    // console.log(this.id)
  }

}
