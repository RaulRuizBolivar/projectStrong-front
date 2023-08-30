import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineShowComponent } from './routine-show.component';

describe('RoutineShowComponent', () => {
  let component: RoutineShowComponent;
  let fixture: ComponentFixture<RoutineShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutineShowComponent]
    });
    fixture = TestBed.createComponent(RoutineShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
