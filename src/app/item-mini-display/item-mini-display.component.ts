import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-mini-display',
  templateUrl: './item-mini-display.component.html',
  styleUrls: ['./item-mini-display.component.css']
})
export class ItemMiniDisplayComponent implements OnInit {
  item = {
    name: 'Toyota Acura',
    price: '$2000',
    image: './assets/images/angularLogo.png'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
