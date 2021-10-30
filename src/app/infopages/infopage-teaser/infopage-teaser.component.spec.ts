import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopageTeaserComponent } from './infopage-teaser.component';

describe('InfopageTeaserComponent', () => {
  let component: InfopageTeaserComponent;
  let fixture: ComponentFixture<InfopageTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopageTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopageTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
