import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blogs?: Blog[];

  constructor(private blogservice: BlogService) { }

  ngOnInit() : void{
    this.getallBlogs;

  }

  getallBlogs() {
    this.blogservice.getBlogs().subscribe((response: any) => {

      this.blogs = response

    }, (error) => {
      console.log(error);

    })
    
  }









}
