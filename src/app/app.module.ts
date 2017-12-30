import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FirstComponentComponent} from './first-component/first-component.component';
import {ItemMiniDisplayComponent} from './item-mini-display/item-mini-display.component';
import {DataFetchService} from './data-fetch.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ItemMiniDisplayComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
