import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loan: Object;


  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getLoan().subscribe(response =>
      this.loan = response);
  }

}
