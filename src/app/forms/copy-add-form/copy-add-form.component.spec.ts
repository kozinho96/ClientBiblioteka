import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyAddFormComponent } from './copy-add-form.component';

describe('CopyAddFormComponent', () => {
  let component: CopyAddFormComponent;
  let fixture: ComponentFixture<CopyAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
