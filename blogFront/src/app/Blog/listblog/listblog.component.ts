import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent  implements OnInit {

  
  blogs?: Blog[];


  constructor(private blogservice : BlogService , private router : Router) { }

  ngOnInit() : void{
    this.getallBlogs();

  }

  getallBlogs() {
    this.blogservice.getBlogs().subscribe((response: any) => {

      this.blogs = response

    }, (error) => {
      console.log(error);
    })
    
  }

  showdetails(id : any){
    this.router.navigate(['/blog', id])
  }

}
