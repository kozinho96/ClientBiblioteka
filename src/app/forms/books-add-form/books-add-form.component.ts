import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-books-add-form',
  templateUrl: './books-add-form.component.html',
  styleUrls: ['./books-add-form.component.css']
})
export class BooksAddFormComponent implements OnInit {

  books = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl(''),
    idAuthor: new FormControl(''),
  });


  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addBook(this.books.value);
    alert('Dodano książkę');
    window.location.reload();
  }

  ngOnInit() {
  }

}
