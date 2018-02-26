import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../shopping-cart-navigator-service';
import { FormGroup } from '@angular/forms';
const my_route = 'shoppingcart/review';
@Component({
  selector: 'ev-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  form: FormGroup;
  constructor(private navigator: NavigatorService) { }

  ngOnInit() {
    this.navigator.navigatorStateChange.subscribe(obj => {
      if (this.navigator.shouldSaveState(obj, my_route)  ) {
        console.log("calling save state review");
      }
    })
  }

}
