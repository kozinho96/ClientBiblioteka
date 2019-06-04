import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-readers-add-form',
  templateUrl: './readers-add-form.component.html',
  styleUrls: ['./readers-add-form.component.css']
})
export class ReadersAddFormComponent implements OnInit {

  users = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    pesel: new FormControl(''),
    eMail: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addReaders(this.users.value);
    alert('Dodano czytelnika');
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
