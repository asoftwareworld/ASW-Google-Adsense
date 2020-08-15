import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { GoogleAdsenseConfig, ADSENSE_TOKEN } from './google-adsense-config';
import { GoogleAdsenseComponent } from './google-adsense.component';

@NgModule({
    imports: [CommonModule],
    exports: [GoogleAdsenseComponent],
    declarations: [GoogleAdsenseComponent],
})
export class GoogleAdsenseModule {
    static forRoot(config: Partial<GoogleAdsenseConfig> = {}): ModuleWithProviders<GoogleAdsenseModule> {
        return {
            ngModule: GoogleAdsenseModule,
            providers: [{ provide: ADSENSE_TOKEN, useValue: config }],
        };
    }
}