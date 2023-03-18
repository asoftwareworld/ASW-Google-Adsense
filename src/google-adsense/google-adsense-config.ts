import { InjectionToken } from '@angular/core';

/**
 * Set optional global default values
 */
export interface AswGoogleAdsenseConfig {
    /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
    adClient: string;
    /** ad slot/number */
    adSlot: string | number;
    /** data-ad-format default: auto */
    adFormat: string;
    /** ins element display style */
    display: string;
    /** ins element height in px */
    width: number;
    /** ins element width in px */
    height: number;
    /** used for in-feed ads */
    layout: string;
    /** used for in-feed ads */
    layoutKey: string;
    /** enable page-level ads */
    pageLevelAds: boolean;
    adtest: string;
    /** used for flexible ads */
    fullWidthResponsive: boolean;
}

export const ASW_GOOGLE_ADSENSE_TOKEN = new InjectionToken<AswGoogleAdsenseConfig>(
    'AswGoogleAdsenseConfig',
);
