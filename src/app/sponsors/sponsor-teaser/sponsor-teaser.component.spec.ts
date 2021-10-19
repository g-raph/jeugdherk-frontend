import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorTeaserComponent } from './sponsor-teaser.component';

describe('SponsorTeaserComponent', () => {
  let component: SponsorTeaserComponent;
  let fixture: ComponentFixture<SponsorTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
