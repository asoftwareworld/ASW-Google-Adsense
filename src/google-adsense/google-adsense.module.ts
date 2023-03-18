import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AswGoogleAdsense } from './google-adsense';

import { AswGoogleAdsenseConfig, ASW_GOOGLE_ADSENSE_TOKEN } from './google-adsense-config';

@NgModule({
    imports: [CommonModule],
    exports: [AswGoogleAdsense],
    declarations: [AswGoogleAdsense],
})
export class AswGoogleAdsenseModule {
    static forRoot(config: Partial<AswGoogleAdsenseConfig> = {}): ModuleWithProviders<AswGoogleAdsenseModule> {
        return {
            ngModule: AswGoogleAdsenseModule,
            providers: [{ provide: ASW_GOOGLE_ADSENSE_TOKEN, useValue: config }],
        };
    }
}
