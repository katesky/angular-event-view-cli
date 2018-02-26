import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


export class NavigatorItem {
  public component: string;
  constructor(component: string) { this.component = component; }
  // Constructor
}


@Injectable()
export class NavigatorService implements IAbstractNavigator {

  constructor() {

  }
  init(collection: NavigatorItem[], router: Router) {
    this._collection = collection;
    this.router = router;
  };

  private _current = 0;
  private _step = 1;
  private _collection: NavigatorItem[];
  private router: Router
  isFirst(): boolean {
    return this._current == 0;
  }
  isDone(): boolean {
    return this._current >= this._collection.length - 1;
  }
  private currentItem(): NavigatorItem {
    return this._collection[this._current] as NavigatorItem;
  }

  gofirst() {
    this._current = 0;
    this.router.navigate([this.currentItem().component]);
  }
  golast() {
    this._current = this._collection.length - 1;
    this.router.navigate([this.currentItem().component]);
  }
  gonext() {
    this._current += this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);
    }
    else { this.golast(); }
  }

  goprev() {
    this._current -= this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);
    }
    else { this.gofirst(); }
  }
  goto(link: string) {
    this._current =  this._collection.findIndex( it => {
      return it.component.endsWith(link);
    });
    this.router.navigate([this.currentItem().component]);
  }
}

export interface IAbstractNavigator {
  init(collection: NavigatorItem[], router: Router);
  gofirst();
  gonext();
  golast();
  goprev();
  isFirst(): boolean;
  isDone(): boolean;
  goto(link: string);
}