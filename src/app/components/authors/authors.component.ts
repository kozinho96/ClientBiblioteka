import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  author: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getAuthors().subscribe(response =>
      this.author = response);
  }

}
