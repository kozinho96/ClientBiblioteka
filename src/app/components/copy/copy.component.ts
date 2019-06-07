import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent implements OnInit {

  copy: Object;


  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getCopy().subscribe(response =>
      this.copy = response);
  }

}
