import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public idBook: number;
  comment: Object;

  constructor(private data: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let idBook: string;
    this.route.paramMap
      .subscribe(params => {
        idBook = params.get('idBook');
      });
    if (1) {
      this.data.getComments(1).subscribe(response =>
        this.comment = response);
    } else {
      this.idBook = 1;
    }
  }
}
