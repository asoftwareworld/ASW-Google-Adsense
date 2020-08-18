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
    /** asw element display style */
    display: string;
    /** asw element height in px */
    width: number;
    /** asw element width in px */
    height: number;
    /** used for in-feed ads */
    layout: string;
    /** used for in-feed ads */
    layoutKey: string;
    /** enable page-level ads */
    pageLevelAds: boolean;
    /** on first load sometimes adsense is not ready */
    timeOutRetry: number;
    adtest: string;
    /** used for flexible ads */
    fullWidthResponsive: boolean;
}

export const ADSENSE_TOKEN = new InjectionToken<AswGoogleAdsenseConfig>(
    'AswGoogleAdsenseConfig',
);