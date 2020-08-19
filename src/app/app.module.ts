import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoogleAdsenseModule } from '@asoftwareworld/google-adsense';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleAdsenseModule.forRoot({
      adClient: 'ca-pub-9010581920864857',
      adSlot: 1795662914,
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
