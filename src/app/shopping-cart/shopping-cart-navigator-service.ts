import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


export class NavigatorItem {
  public component: string;
  constructor(component: string) { this.component = component; }
  // Constructor
}


@Injectable()
export class NavigatorService implements IAbstractNavigator {
  navigatorStateChange: BehaviorSubject<Object> = new BehaviorSubject<Object>({});

  constructor() { }


  init(collection: NavigatorItem[], router: Router) {
    this._collection = collection;
    this.router = router;
  };

  private _current = 0;
  private _step = 1;
  private _collection: NavigatorItem[];
  private router: Router
  
  shouldSaveState(obj:any, route:string){
    return (obj["current"]["component"] == route && obj["next"]["component"] != route) ;      
  }

  isFirst(): boolean {
    return this._current == 0;
  }
  isDone(): boolean {
    return this._current >= this._collection.length - 1;
  }
  private currentItem(): NavigatorItem {

    return this._collection[this._current] as NavigatorItem;
  }
  changeState(changingToIndex: number, currentindex: number) {
    let current = this._collection[currentindex];
    let next = this._collection[changingToIndex];
    this.navigatorStateChange.next({ current: current, next: next });

  }
  gofirst() {
    this._current = 0;
    this.router.navigate([this.currentItem().component]);
    this.changeState(0, this._current);

  }
  golast() {
    let current = this._current;
    this._current = this._collection.length - 1;
    this.router.navigate([this.currentItem().component]);
    this.changeState(this._collection.length - 1, current);
  }
  gonext() {
    let current = this._current;
    this._current += this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);
      this.changeState(this._current + this._step, current);
    }
    else {
      this.golast()
    }
  }

  goprev() {
    let current = this._current;
    this._current -= this._step;
    if (!this.isDone()) {
      this.router.navigate([this.currentItem().component]);
      this.changeState(this._current - this._step, current);
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
    this.router.navigate([this.currentItem().component]);
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
}