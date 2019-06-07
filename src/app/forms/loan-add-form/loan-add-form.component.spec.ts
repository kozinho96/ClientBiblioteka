import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAddFormComponent } from './loan-add-form.component';

describe('LoanAddFormComponent', () => {
  let component: LoanAddFormComponent;
  let fixture: ComponentFixture<LoanAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
