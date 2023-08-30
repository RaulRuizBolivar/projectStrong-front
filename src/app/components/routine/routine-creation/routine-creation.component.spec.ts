import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineCreationComponent } from './routine-creation.component';

describe('RoutineCreationComponent', () => {
  let component: RoutineCreationComponent;
  let fixture: ComponentFixture<RoutineCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutineCreationComponent]
    });
    fixture = TestBed.createComponent(RoutineCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
