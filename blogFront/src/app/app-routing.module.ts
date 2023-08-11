import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './Blog/addblog/addblog.component';
import { UpdateblogComponent } from './Blog/updateblog/updateblog.component';
import { ListblogComponent } from './Blog/listblog/listblog.component';
import { BlogdetailsComponent } from './Blog/blogdetails/blogdetails.component';
import { ListblogadminComponent } from './Blog/listblogadmin/listblogadmin.component';

const routes: Routes = [
  {path : "addblog" , component : AddblogComponent},
  {path : "listblogadmin/:id", component : UpdateblogComponent},
  {path : "blog" , component : ListblogComponent},
  {path : "blog/:id" , component : BlogdetailsComponent},
  {path : "blogdetails" , component : BlogdetailsComponent},
  {path : "listblogadmin",component : ListblogadminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
