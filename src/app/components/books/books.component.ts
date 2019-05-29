import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Object;


  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getBooks().subscribe(response =>
      this.book = response);
  }

}
