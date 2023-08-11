import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }


  public getBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(`${this.apiServerUrl}/blogs/all`)
  }

  getBlogById(id: any) {
    return this.http.get(`${this.apiServerUrl}/blogs/find/${id}`)
  }
  
  public addBlog(blog:Blog):Observable<Blog>{
    return this.http.post<Blog>(`${this.apiServerUrl}/blogs/add`, blog)
  }
  
  public updateBlog(id :any ,blog:Blog):Observable<Blog>{
    return this.http.put<Blog>(`${this.apiServerUrl}/blogs/update/${id}`, blog)
  }
  
  public deleteBlog(blogId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/blogs/delete/${blogId}`)
  }
}
