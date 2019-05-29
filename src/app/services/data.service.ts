import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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



}
