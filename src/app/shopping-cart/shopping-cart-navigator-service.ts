import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


export class NavigatorItem {
  public component: string;
  constructor(component: string) { this.component = component; }
  // Constructor
}
export class Navigator {
  public current: string;
  public next: string;
  constructor(current: string = "", next: string = "") {
    this.current = current;
    this.next = next;
  }
}
@Injectable()
export class NavigatorService implements IAbstractNavigator {

  navigatorStateChange: BehaviorSubject<Navigator> = new BehaviorSubject<Navigator>(new Navigator());

  constructor() { }



  private _current = 0;
  private _step = 1;
  private _collection: NavigatorItem[];
  private router: Router


  private currentItem(): NavigatorItem {

    return this._collection[this._current] as NavigatorItem;
  }
  private changeState(changingToIndex: number, currentindex: number) {
    let current = this._collection[currentindex];
    let next = this._collection[changingToIndex];
    this.navigatorStateChange.next(new Navigator(current.component, next.component));
  }

  init(collection: NavigatorItem[], router: Router) {
    this._collection = collection;
    this.router = router;
  };
  shouldSaveState(navigator: Navigator, route: string) {
    return (navigator.current == route && navigator.next != route);
  }
  isFirst(): boolean {
    return this._current == 0;
  }
  isDone(): boolean {
    return this._current >= this._collection.length - 1;
  }
  gofirst() {
    this._current = 0;
    this.router.navigate([this.currentItem().component], { skipLocationChange: true });
    this.changeState(0, this._current);

  }
  golast() {
    let current = this._current;
    this._current = this._collection.length - 1;
    this.router.navigate([this.currentItem().component], { skipLocationChange: true });
    this.changeState(this._current, current);
  }
  gonext() {
    let current = this._current;
    this._current += this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component], { skipLocationChange: true });
      this.changeState(this._current, current);
    }
    else {
      this.golast()
    }
  }

  goprev() {
    let current = this._current;
    this._current -= this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component], { skipLocationChange: true });
      this.changeState(this._current, current);
    }
    else {
      this.gofirst();
    }
  }
  goto(link: string) {
    let current = this._current;
    this._current = this._collection.findIndex(it => {
      return it.component.endsWith(link);
    });
    this.router.navigate([this.currentItem().component], { skipLocationChange: true });
    this.changeState(this._current, current);
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

  shouldSaveState(navigator: Navigator, route: string): boolean;
}