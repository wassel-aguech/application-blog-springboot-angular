import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddblogComponent } from './Blog/addblog/addblog.component';
import { ListblogComponent } from './Blog/listblog/listblog.component';
import { UpdateblogComponent } from './Blog/updateblog/updateblog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogdetailsComponent } from './Blog/blogdetails/blogdetails.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListblogadminComponent } from './Blog/listblogadmin/listblogadmin.component';





@NgModule({
  declarations: [
    AppComponent,
    AddblogComponent,
    ListblogComponent,
    UpdateblogComponent,
    BlogdetailsComponent,
    NavbarComponent,
    FooterComponent,
    ListblogadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    RouterModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
