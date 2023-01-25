import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHerosComponent } from './components/my-heros/my-heros.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CitizenidCheckComponent } from './components/citizenid-check/citizenid-check.component';
import { ArticleFiveComponent } from './components/article-five/article-five.component';
import { DigitOnlyDirective } from './directives/digit-only.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyHerosComponent,
    TestListComponent,
    PostListComponent,
    CitizenidCheckComponent,
    ArticleFiveComponent,
    DigitOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
