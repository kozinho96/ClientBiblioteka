import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-loan-add-form',
  templateUrl: './loan-add-form.component.html',
  styleUrls: ['./loan-add-form.component.css']
})
export class LoanAddFormComponent implements OnInit {

  loan = new FormGroup({
    dataLoan: new FormControl(''),
    dataReturn: new FormControl(''),
    idUser: new FormControl(''),
    idCopy: new FormControl(''),
  });

  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addLoan(this.loan.value);
    alert('Dodano wypożyczenie');
    // window.location.reload();
  }

  ngOnInit(): void {
  }
}
