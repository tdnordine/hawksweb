import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsreelComponent } from './newsreel.component';

describe('NewsreelComponent', () => {
  let component: NewsreelComponent;
  let fixture: ComponentFixture<NewsreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
