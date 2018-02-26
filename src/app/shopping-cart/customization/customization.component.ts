import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '../shopping-cart-navigator-service';
const my_route = 'shoppingcart/customization'
@Component({
  selector: 'ev-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  constructor(private navigator: NavigatorService) { }

  ngOnInit() {
    this.navigator.navigatorStateChange.subscribe(obj => {
      if (this.navigator.shouldSaveState(obj, my_route)) {
        console.log("calling save state customization");
      }

    })
  }

}
