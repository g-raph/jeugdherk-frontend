import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTeaserComponent } from './team-teaser.component';

describe('TeamTeaserComponent', () => {
  let component: TeamTeaserComponent;
  let fixture: ComponentFixture<TeamTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
