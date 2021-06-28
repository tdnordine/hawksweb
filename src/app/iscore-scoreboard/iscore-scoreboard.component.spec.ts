import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscoreScoreboardComponent } from './iscore-scoreboard.component';

describe('IscoreScoreboardComponent', () => {
  let component: IscoreScoreboardComponent;
  let fixture: ComponentFixture<IscoreScoreboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscoreScoreboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscoreScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
