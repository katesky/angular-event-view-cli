import { Component, OnInit } from '@angular/core';
class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}
@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'delivery', link: ['delivery'] },
      { caption: 'customization', link: ['customization'] },      
      { caption: 'review', link: ['review'] },
      { caption: 'submit', link: ['submit'] }
    ];
  }

}
