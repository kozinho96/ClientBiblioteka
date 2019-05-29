import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LoanComponent } from './components/loan/loan.component';
import { ReadersComponent } from './components/readers/readers.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BooksComponent,
    ReservationComponent,
    LoanComponent,
    ReadersComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
