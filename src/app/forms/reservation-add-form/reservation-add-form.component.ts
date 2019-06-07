import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-reservation-add-form',
  templateUrl: './reservation-add-form.component.html',
  styleUrls: ['./reservation-add-form.component.css']
})
export class ReservationAddFormComponent implements OnInit {

  reservation = new FormGroup({
    dateReserwation: new FormControl(''),
    idUser: new FormControl(''),
    idBook: new FormControl(''),
  });

  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addReservation(this.reservation.value);
    alert('Dodano rezerwację');
    // window.location.reload();
  }

  ngOnInit() {
  }

}
