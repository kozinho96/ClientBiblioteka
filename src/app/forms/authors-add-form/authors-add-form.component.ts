import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-authors-add-form',
  templateUrl: './authors-add-form.component.html',
  styleUrls: ['./authors-add-form.component.css']
})
export class AuthorsAddFormComponent implements OnInit {

  authors = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addAuthors(this.authors.value);
    alert('Dodano autora');
    // window.location.reload();
  }

  ngOnInit(): void {
  }

}
