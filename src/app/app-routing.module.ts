import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BooksComponent} from './components/books/books.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {LoanComponent} from './components/loan/loan.component';
import {ReadersComponent} from './components/readers/readers.component';
import {CommentsComponent} from './components/comments/comments.component';

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
    path: 'reservation',
    component: ReservationComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
