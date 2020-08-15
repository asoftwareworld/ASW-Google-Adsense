import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {GoogleAdsenseModule} from './google-adsense/google-adsense.module';
@NgModule({
  imports: [ BrowserModule, FormsModule,
  GoogleAdsenseModule.forRoot({
      adClient: 'ca-pub-9010581920864857',
      adSlot: 1795662914,
  }), ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
