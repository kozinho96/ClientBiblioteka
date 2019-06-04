import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAddFormComponent } from './reservation-add-form.component';

describe('ReservationAddFormComponent', () => {
  let component: ReservationAddFormComponent;
  let fixture: ComponentFixture<ReservationAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
