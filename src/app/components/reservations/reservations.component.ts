import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservation: Object;


  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getReservations().subscribe(response =>
      this.reservation = response);
  }

}
