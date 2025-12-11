import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyCreation } from './form-modify-creation';

describe('FormModifyCreation', () => {
  let component: FormModifyCreation;
  let fixture: ComponentFixture<FormModifyCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModifyCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModifyCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
