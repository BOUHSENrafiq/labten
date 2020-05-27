import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssignementsComponent } from './edit-assignements.component';

describe('EditAssignementsComponent', () => {
  let component: EditAssignementsComponent;
  let fixture: ComponentFixture<EditAssignementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssignementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
