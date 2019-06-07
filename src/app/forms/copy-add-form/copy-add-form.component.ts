import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-copy-add-form',
  templateUrl: './copy-add-form.component.html',
  styleUrls: ['./copy-add-form.component.css']
})
export class CopyAddFormComponent implements OnInit {

  copy = new FormGroup({
    idBook: new FormControl(''),
  });


  constructor(private data: DataService) {
  }

  onSubmit() {
    this.data.addCopy(this.copy.value);
    alert('Dodano egzemplarz');
    // window.location.reload();
  }

  ngOnInit() {
  }
}
