import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineListComponent } from './routine-list.component';

describe('RoutineListComponent', () => {
  let component: RoutineListComponent;
  let fixture: ComponentFixture<RoutineListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutineListComponent]
    });
    fixture = TestBed.createComponent(RoutineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
