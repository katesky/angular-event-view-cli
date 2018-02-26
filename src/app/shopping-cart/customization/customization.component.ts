import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../shopping-cart-navigator-service';
import { FormGroup, FormBuilder } from '@angular/forms';
const my_route = 'shoppingcart/customization'
@Component({
  selector: 'ev-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {
  form: FormGroup;
 
  constructor(fb: FormBuilder, private navigator: NavigatorService) {
    this.form = fb.group({
      fullname:'First Last'
    });
  }
  ngOnInit() {
    this.navigator.navigatorStateChange.subscribe(obj => {
      if (this.navigator.shouldSaveState(obj, my_route) && this.form.touched) {
        console.log("calling save state customization");
      }

    })
  }

}
