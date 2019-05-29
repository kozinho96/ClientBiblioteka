import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  user: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(response =>
      this.user = response);
  }

}
