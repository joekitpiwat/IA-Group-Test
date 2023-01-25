import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHerosComponent } from './my-heros/my-heros.component';
import { TestListComponent } from './test-list/test-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MyHerosComponent,
    TestListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
