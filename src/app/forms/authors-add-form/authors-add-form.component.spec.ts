import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAddFormComponent } from './authors-add-form.component';

describe('AuthorsAddFormComponent', () => {
  let component: AuthorsAddFormComponent;
  let fixture: ComponentFixture<AuthorsAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
