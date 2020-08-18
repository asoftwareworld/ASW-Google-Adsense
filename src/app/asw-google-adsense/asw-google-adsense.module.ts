import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AswGoogleAdsenseConfig, ADSENSE_TOKEN } from './asw-google-adsense-config';
import { AswGoogleAdsenseComponent } from './asw-google-adsense.component';

@NgModule({
    imports: [CommonModule],
    exports: [AswGoogleAdsenseComponent],
    declarations: [AswGoogleAdsenseComponent],
})
export class AswGoogleAdsenseModule {
    static forRoot(config: Partial<AswGoogleAdsenseConfig> = {}): ModuleWithProviders<AswGoogleAdsenseModule> {
        return {
            ngModule: AswGoogleAdsenseModule,
            providers: [{ provide: ADSENSE_TOKEN, useValue: config }],
        };
    }
}