import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AswGoogleAdsenseComponent } from './asw-google-adsense.component';

describe('AswGoogleAdsenseComponent', () => {
  let component: AswGoogleAdsenseComponent;
  let fixture: ComponentFixture<AswGoogleAdsenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AswGoogleAdsenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AswGoogleAdsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
