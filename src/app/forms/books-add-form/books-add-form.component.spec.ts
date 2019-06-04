import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddFormComponent } from './books-add-form.component';

describe('BooksAddFormComponent', () => {
  let component: BooksAddFormComponent;
  let fixture: ComponentFixture<BooksAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
