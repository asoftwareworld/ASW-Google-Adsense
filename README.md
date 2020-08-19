# ASW-Google-Adsense

Show google ads for Angular application with latest version of Angular. 

## Install

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
import { GoogleAdsenseModule } from '@asoftwareworld/google-adsense';
// ...

@NgModule({
  imports: [
    // shown passing global defaults (optional)
    GoogleAdsenseModule.forRoot({
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
<a href="https://paypal.me/asoftwareworld?locale.x=en_GB"><img src="blue.svg" height="40"></a>  
If you enjoyed this project — or just feeling generous, consider buying me a beer. Cheers! :beers:
