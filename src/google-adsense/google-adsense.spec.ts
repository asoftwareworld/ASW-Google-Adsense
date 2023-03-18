import { TestBed, waitForAsync } from '@angular/core/testing';

import { AswGoogleAdsense } from './google-adsense';
import { AswGoogleAdsenseModule } from './google-adsense.module';

describe('AswGoogleAdsense', () => {
    const options = {
        adClient: 'ca-pub-9010581920864857',
        adSlot: 1795662914,
        layout: 'z1',
    };
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AswGoogleAdsenseModule.forRoot(options)],
        }).compileComponents();
    }));

    it('should render ng adsense', waitForAsync(() => {
        const fixture = TestBed.createComponent(AswGoogleAdsense);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const ad = compiled.querySelector('ins');
        expect(ad.className).toContain('adsbygoogle');
        expect(ad.getAttribute('data-ad-slot')).toEqual(String(options.adSlot));
        expect(ad.getAttribute('data-ad-client')).toEqual(options.adClient);
        expect(ad.getAttribute('data-layout')).toEqual('z1');
        expect(ad.getAttribute('data-layout-key')).toEqual(null);
        expect(ad.getAttribute('height')).toEqual(null);
        expect(ad.getAttribute('width')).toEqual(null);
        expect(ad.getAttribute('data-full-width-responsive')).toEqual(null);
    }));
});
