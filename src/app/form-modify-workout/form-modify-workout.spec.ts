import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyWorkout } from './form-modify-workout';

describe('FormModifyWorkout', () => {
  let component: FormModifyWorkout;
  let fixture: ComponentFixture<FormModifyWorkout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModifyWorkout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModifyWorkout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
