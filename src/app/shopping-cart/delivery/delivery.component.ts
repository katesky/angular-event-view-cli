import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavigatorService } from '../shopping-cart-navigator-service';
const my_route = 'shoppingcart/delivery';
@Component({
  selector: 'ev-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})


export class DeliveryComponent implements OnInit {
  entries = ['Default', 'Add', 'Custom']
  form: FormGroup;
  address = { line1: "1", line2: "2", type: "Default" }

  constructor(fb: FormBuilder, private navigator: NavigatorService) {
    this.form = fb.group({
      entry: "Default"
    });
  }
  changed(entry: string) {
    this.address.type = entry;
    this.address.line1 = entry + '-1';
    this.address.line2 = entry + '-2';
    console.log("changed:" + entry);
  }
  ngOnInit() {
    this.navigator.navigatorStateChange.subscribe(obj => {
      if (this.navigator.shouldSaveState(obj, my_route)) {
        console.log("calling save state delivery");
      }
    })
  }

}
