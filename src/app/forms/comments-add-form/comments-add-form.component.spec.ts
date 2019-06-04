import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAddFormComponent } from './comments-add-form.component';

describe('CommentsAddFormComponent', () => {
  let component: CommentsAddFormComponent;
  let fixture: ComponentFixture<CommentsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
