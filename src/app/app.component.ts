import {Component, OnInit} from '@angular/core';
import {DataFetchService} from './data-fetch.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    P {
      background-color: lightgray;
      width: 200px;
      margin: 100px auto;
      text-align: center;
      font-size: 1.5em;
    }
  `],
  animations: [
    trigger('ewAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('small', style({
        transform: 'scale(1.5)',
      })),
      transition('small => large', animate('300s easein'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  someVariable = '';

  constructor(private dataFetchService: DataFetchService) {

  }

  ngOnInit() {
    console.log(this.dataFetchService.cars);
    this.someVariable = this.dataFetchService.myData();
  }
}
