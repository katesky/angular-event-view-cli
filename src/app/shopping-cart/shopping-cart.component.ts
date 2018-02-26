import { Component, OnInit, Type } from '@angular/core';
import { DeliveryComponent } from 'app/shopping-cart/delivery/delivery.component';
import { CustomizationComponent } from 'app/shopping-cart/customization/customization.component';
import { ReviewComponent } from 'app/shopping-cart/review/review.component';
import { Router } from '@angular/router';
import { NavigatorService, NavigatorItem } from 'app/shopping-cart/shopping-cart-navigator-service';

@Component({
  selector: 'ev-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private navigator: NavigatorService) {    }

  ngOnInit() {
    let collection: NavigatorItem[] = [];
    collection.push(new NavigatorItem('shoppingcart/delivery'));
    collection.push(new NavigatorItem('shoppingcart/customization'));
    collection.push(new NavigatorItem('shoppingcart/review'));
    collection.push(new NavigatorItem('shoppingcart/submit'));

    this.navigator.init(collection, this.router);
    this.navigator.gofirst();
    this.navigator.navigatorStateChange.subscribe(obj=>{
      console.log( obj);
    })
  }
  goNext() {
    this.navigator.gonext(); 
  }
  goPrev() {
    this.navigator.goprev(); 
  }
  onSubmit() {
    console.log("submited");
    this.navigator.gofirst();   
  }
}
