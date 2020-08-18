import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Inject,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ADSENSE_TOKEN, AswGoogleAdsenseConfig } from './asw-google-adsense-config';

@Component({
  selector: 'asw-google-adsense',
  templateUrl: './asw-google-adsense.component.html',
  styleUrls: ['./asw-google-adsense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AswGoogleAdsenseComponent implements OnInit, AfterViewInit, OnDestroy {

    /** adsense account ca-pub-XXXXXXXXXXXXXXXX */
    @Input() adClient: string;
    /** ad slot/number */
    @Input() adSlot: string | number;
    @Input() adFormat: string;
    /** can be manually set if you need all ads on a page to have same id page-xxx */
    @Input() adRegion = 'page-' + Math.floor(Math.random() * 10000) + 1;
    /** asw element display style */
    @Input() display: string;
    /** asw element height in px */
    @Input() width: number;
    /** asw element width in px */
    @Input() height: number;
    /** used for in-feed ads */
    @Input() layout: string;
    /** used for in-feed ads */
    @Input() layoutKey: string;
    /** enable page-level ads */
    @Input() pageLevelAds: boolean;
    /** on first load sometimes adsense is not ready */
    @Input() timeOutRetry: number;
    /** sets up some sort of google test ad */
    @Input() adtest: string;
    /* used for flexible ads */
    @Input() fullWidthResponsive: boolean;
    /**
     * classes applied to the asw element
     */
    @Input() className: string;
    @ViewChild('asw', { read: ElementRef, static: true }) asw: any;

    constructor(
        @Inject(ADSENSE_TOKEN) private config: AswGoogleAdsenseConfig,
    ) { }

    ngOnInit() {
        const config = this.config;
        function use<T>(source: T, defaultValue: T): T {
            return config && source !== undefined ? source : defaultValue;
        }
        this.adClient = use(this.adClient, config.adClient);
        this.adSlot = use(this.adSlot, config.adSlot);
        this.adFormat = use(this.adFormat, config.adFormat || 'auto');
        this.display = use(this.display, config.display || 'block');
        this.width = use(this.width, config.width);
        this.height = use(this.height, config.height);
        this.layout = use(this.layout, config.layout);
        this.layoutKey = use(this.layoutKey, config.layoutKey);
        this.pageLevelAds = use(this.pageLevelAds, config.pageLevelAds);
        this.timeOutRetry = use(this.timeOutRetry, config.timeOutRetry || 200);
        this.adtest = use(this.adtest, config.adtest);
        this.fullWidthResponsive = use(this.fullWidthResponsive, config.fullWidthResponsive);
    }

    ngOnDestroy() {
        const iframe = this.asw.nativeElement.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            iframe.src = 'about:blank';
            iframe.remove();
        }
    }

    /**
     * attempts to push the ad twice. Usually if one doesn't work the other
     * will depeding on if the browser has the adsense code cached and
     * if its the first page to be loaded
     */
    ngAfterViewInit() {
        const res = this.push();
        if (res instanceof TypeError) {
            setTimeout(() => this.push(), this.timeOutRetry);
        }
    }

    push() {
        debugger;
        const p: any = {};
        if (this.pageLevelAds) {
            p.google_ad_client = this.adClient;
            p.enable_page_level_ads = true;
        }
        try {
            const adsbygoogle = (window as any).adsbygoogle;
            adsbygoogle.push(p);
            return true;
        } catch (e) {
            return e;
        }
    }
}
