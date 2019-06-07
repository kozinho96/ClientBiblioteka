import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { LoanComponent } from './components/loan/loan.component';
import { ReadersComponent } from './components/readers/readers.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { ReadersAddFormComponent } from './forms/readers-add-form/readers-add-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BooksAddFormComponent } from './forms/books-add-form/books-add-form.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsAddFormComponent } from './forms/authors-add-form/authors-add-form.component';
import { ReservationAddFormComponent } from './forms/reservation-add-form/reservation-add-form.component';
import { CommentsAddFormComponent } from './forms/comments-add-form/comments-add-form.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { LoanAddFormComponent } from './forms/loan-add-form/loan-add-form.component';
import { CopyComponent } from './components/copy/copy.component';
import { CopyAddFormComponent } from './forms/copy-add-form/copy-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BooksComponent,
    LoanComponent,
    ReadersComponent,
    CommentsComponent,
    ReadersAddFormComponent,
    BooksAddFormComponent,
    AuthorsComponent,
    AuthorsAddFormComponent,
    ReservationAddFormComponent,
    CommentsAddFormComponent,
    ReservationsComponent,
    LoanAddFormComponent,
    CopyComponent,
    CopyAddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
