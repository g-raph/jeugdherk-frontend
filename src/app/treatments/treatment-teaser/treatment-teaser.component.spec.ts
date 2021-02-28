import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentTeaserComponent } from './treatment-teaser.component';

describe('TreatmentTeaserComponent', () => {
  let component: TreatmentTeaserComponent;
  let fixture: ComponentFixture<TreatmentTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
