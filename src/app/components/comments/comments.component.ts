import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public idBook: string;

  comment: Object;

  constructor(private data: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.idBook = params.get('id');
      });
    if (true) {
      this.data.getComments(this.idBook).subscribe(response => {
        this.comment = response;
      });
    } else {
    }
  }
}

