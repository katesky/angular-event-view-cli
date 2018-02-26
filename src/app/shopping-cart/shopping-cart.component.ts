import { Component, OnInit, Type } from '@angular/core';
import { DeliveryComponent } from 'app/shopping-cart/delivery/delivery.component';
import { CustomizationComponent } from 'app/shopping-cart/customization/customization.component';
import { ReviewComponent } from 'app/shopping-cart/review/review.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ev-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {

  navigator: Navigator;

  constructor(private router: Router) { }

  ngOnInit() {
    let collection: Item[] = [];

    collection.push(new Item('shoppingcart/delivery'));
    collection.push(new Item('shoppingcart/customization'));
    collection.push(new Item('shoppingcart/review'));
    collection.push(new Item('shoppingcart/submit'));

    this.navigator = new Navigator(collection, this.router);
    this.navigator.gofirst();
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
class Item {
  public component: string;
  constructor(component: string) { this.component = component; }
  // Constructor
}

export interface IAbstractNavigator {
  gofirst();
  gonext();
  golast();
  goprev();
  isFirst(): boolean;
  isDone(): boolean;   
}

export class Navigator implements IAbstractNavigator {

  constructor(collection: Item[], router: Router) {
    this._collection = collection;
    this.router = router;
  }
  private _current = 0;
  private _step = 1;
  private _collection: Item[];
  private router: Router
  isFirst(): boolean {
    return this._current == 0;
  }
  isDone(): boolean {
    return this._current >= this._collection.length - 1;
  }
  private currentItem(): Item {
    return this._collection[this._current] as Item;
  }

  gofirst() {
    this._current = 0;
    this.router.navigate([this.currentItem().component]);    
  }
  golast()  {
    this._current = this._collection.length - 1;
    this.router.navigate([this.currentItem().component]);    
  }
  gonext() {
    this._current += this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);    
    }
    else {  this.golast(); }
  }

  goprev() {
    this._current -= this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);    
    }
    else {  this.gofirst(); }
  }

}

