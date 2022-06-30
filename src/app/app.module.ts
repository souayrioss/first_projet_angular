import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuardService } from './service/guard.service';
import { PostService } from './service/post.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './posts/details/details.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailsComponent,
    AdminComponent,
    HomeComponent,
    PlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule
  ],
  providers: [
    GuardService ,PostService
  ],
  bootstrap: [AppComponent  ]
})
export class AppModule { }
