import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ev-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() public entity;

  form: FormGroup;
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      line1: [''],
      line2: [''],
      type: [''],
    });
  }

  ngOnInit() {
  
  }

}
