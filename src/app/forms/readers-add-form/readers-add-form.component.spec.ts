import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersAddFormComponent } from './readers-add-form.component';

describe('ReadersAddFormComponent', () => {
  let component: ReadersAddFormComponent;
  let fixture: ComponentFixture<ReadersAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadersAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
