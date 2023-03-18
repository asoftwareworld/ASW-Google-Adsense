<h1 align="center">ASW Google Adsense - show ads in angular app.</h1>

<p align="center">
  <img src="https://user-images.githubusercontent.com/69723522/225834944-8ea6f27d-d02a-4903-91c3-bc97f9209251.svg" alt="asw-logo" width="310px" height="100px"/>
  <br>
  <i>Show google ads for Angular application with latest version of Angular.</i>
  <br>
</p>

<p align="center">
  <a href="https://asoftwareworld.com/#/product/google-adsense"><strong>ASW Google Ads Demo</strong></a>
  <br>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/asoftwareworld/ASW-Google-Adsense/issues">Submit an Issue</a>
  ·
  <a href="https://asoftwareworld.com/#/product/google-adsense">Blog</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@asoftwareworld/google-adsense">
    <img src="https://badge.fury.io/js/%40asoftwareworld%2Fgoogle-adsense.svg" alt="CI status" />
  </a>
  <a href="https://github.com/asoftwareworld/ASW-Google-Adsense/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Discord conversation" />
  </a>
</p>

<hr>

# Documentation

## Installation

```html
npm install @asoftwareworld/google-adsense
```

#### Add google adsense code

Use the standard AdSense code in your `index.html` file under `<head></head>` as you [normally would](https://support.google.com/adsense/answer/7477845)

```html
<script async src=//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js></script>
```

#### Import NgModule

And then include it in your module (see [app.module.ts](https://github.com/asoftwareworld/ASW-Google-Adsense/blob/master/src/app/app.module.ts) ):
```
import { AswGoogleAdsenseModule } from '@asoftwareworld/google-adsense';
// ...

@NgModule({
  imports: [
    // shown passing global defaults (optional)
    AswGoogleAdsenseModule.forRoot({
      adClient: 'ca-pub-9010581920864857',
      adSlot: 1795662914,
    }),
    ...
  ]
  // ...
})
export class AppModule {}
```

#### Show Ad

Uses global defaults which can be overriden via inputs

```html
<asw-google-adsense
  [adClient]="'ca-pub-9010581920864857'"
  [adSlot]="1795662914"
  [display]="'inline-block'"
  [width]="320"
  [height]="108"
></asw-google-adsense>
```

## Inputs

| input        | type          | description                                                           |
| ------------ | ------------- | --------------------------------------------------------------------- |
| adClient     | string        | account ca-pub-XXXXXXXXXXXXXXXX                                       |
| adSlot       | string/number | ad slot/number                                                        |
| adFormat     | string        | adsense ad format                                                     |
| adRegion     | string        | older adsense code to make all ads on page the same                   |
| display      | string        | element display style                                                 |
| height       | number        | element height in px                                                  |
| width        | number        | element width in px                                                   |
| layout       | string        | used for in-feed ads                                                  |
| layoutKey    | string        | used for in-feed ads                                                  |
| pageLevelAds | boolean       | enable page-level ads                                                 |
| timeOutRetry | boolean       | on first load sometimes adsense is not ready. retry's push after x ms |
| adtest       | string        | sets up some sort of google test ad                                   |
| className    | string        | add custom class names to the "asw" element                           |

## License
MIT License.

## donate
<a href="https://paypal.me/asoftwaresworld?locale.x=en_GB"><img src="blue.svg" height="40"></a>  
If you enjoyed this project — or just feeling generous, consider buying me a beer. Cheers! :beers:
