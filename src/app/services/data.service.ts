import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from '../classes/users';
import {Books} from '../classes/books';
import {Authors} from '../classes/authors';
import {Reservations} from '../classes/reservations';
import {Comments} from '../classes/comments';
import {Loan} from '../classes/loan';
import {Copy} from '../classes/copy';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.url + '/showUsers');
  }

  getBooks() {
    return this.http.get(this.url + '/showBooks');
  }

  getComments(id) {
    return this.http.get(`${this.url}/comments/${id}`);
  }

  getLoan() {
    return this.http.get(this.url + '/showLoan');
  }

  getAuthors() {
    return this.http.get(this.url + '/showAuthors');
  }

  getReservations() {
    return this.http.get(this.url + '/showReservations');
  }

  getCopy() {
    return this.http.get(this.url + '/showCopys');
  }


  addReaders(user: Users) {
    return this.http.post(this.url + '/addReaders', user, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addBook(book: Books) {
    return this.http.post(this.url + '/addBooks', book, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addAuthors(author: Authors) {
    return this.http.post(this.url + '/addAuthors', author, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addReservation(reservation: Reservations) {
    return this.http.post(this.url + '/makeReservation', reservation, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addComment(comment: Comments) {
    return this.http.post(this.url + '/addComment', comment, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addLoan(loan: Loan) {
    return this.http.post(this.url + '/loanBook', loan, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  addCopy(copy: Copy) {
    return this.http.post(this.url + '/addCopy', copy, this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body', val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }
}
