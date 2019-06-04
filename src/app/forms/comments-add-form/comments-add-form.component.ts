import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-comments-add-form',
  templateUrl: './comments-add-form.component.html',
  styleUrls: ['./comments-add-form.component.css']
})
export class CommentsAddFormComponent implements OnInit {

  comments = new FormGroup({
    contentComment: new FormControl(''),
    idUser: new FormControl(''),
    idBook: new FormControl(''),
  });

  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addComment(this.comments.value);
    alert('Dodano komentarz');
    window.location.reload();
  }

  ngOnInit() {
  }

}
