import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTeaserComponent } from './event-teaser.component';

describe('EventTeaserComponent', () => {
  let component: EventTeaserComponent;
  let fixture: ComponentFixture<EventTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
