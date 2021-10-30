import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopageDetailComponent } from './infopage-detail.component';

describe('InfopageDetailComponent', () => {
  let component: InfopageDetailComponent;
  let fixture: ComponentFixture<InfopageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
