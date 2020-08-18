import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AswGoogleAdsenseModule } from './asw-google-adsense/asw-google-adsense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AswGoogleAdsenseModule.forRoot({
      adClient: 'ca-pub-9010581920864857',
      adSlot: 1795662914,
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
