import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooksComponent} from './components/books/books.component';
import {LoanComponent} from './components/loan/loan.component';
import {ReadersComponent} from './components/readers/readers.component';
import {CommentsComponent} from './components/comments/comments.component';
import {ReadersAddFormComponent} from './forms/readers-add-form/readers-add-form.component';
import {BooksAddFormComponent} from './forms/books-add-form/books-add-form.component';
import {AuthorsComponent} from './components/authors/authors.component';
import {AuthorsAddFormComponent} from './forms/authors-add-form/authors-add-form.component';
import {ReservationAddFormComponent} from './forms/reservation-add-form/reservation-add-form.component';
import {CommentsAddFormComponent} from './forms/comments-add-form/comments-add-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'readers',
    component: ReadersComponent
  },
  {
    path: 'comments/:id',
    component: CommentsComponent
  },
  {
    path: 'readersAdd',
    component: ReadersAddFormComponent
  },
  {
    path: 'booksAdd',
    component: BooksAddFormComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'authorsAdd',
    component: AuthorsAddFormComponent
  },
  {
    path: 'reservationAdd',
    component: ReservationAddFormComponent
  },
  {
    path: 'commentsAdd',
    component: CommentsAddFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
