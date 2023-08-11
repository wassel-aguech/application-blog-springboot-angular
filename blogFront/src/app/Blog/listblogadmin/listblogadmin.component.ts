import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listblogadmin',
  templateUrl: './listblogadmin.component.html',
  styleUrls: ['./listblogadmin.component.css']
})
export class ListblogadminComponent implements OnInit {

  blogs?: Blog[];
  titleblog : any;

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

  gotoupdate(id : any){
    this.router.navigate(['/listblogadmin', id])
  }

  delete(id: any) {
    this.blogservice.deleteBlog(id).subscribe((response: any) => {
      alert('delete succsess')
      this.getallBlogs();
    }, (error) => {
      console.log(error);

    })
  }
}
