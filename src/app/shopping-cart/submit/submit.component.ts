import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../shopping-cart-navigator-service';
import { FormGroup } from '@angular/forms';
const my_route = 'shoppingcart/submit';
@Component({
  selector: 'ev-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  form: FormGroup;
  constructor(private navigator: NavigatorService) { }

  ngOnInit() {
    this.navigator.navigatorStateChange.subscribe(obj => {
      if (this.navigator.shouldSaveState(obj, my_route)) {
        console.log("calling save state submit");
      }
    })
  }

}
