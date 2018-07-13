import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetsparkComponent } from './vetspark.component';

describe('VetsparkComponent', () => {
  let component: VetsparkComponent;
  let fixture: ComponentFixture<VetsparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetsparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetsparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
