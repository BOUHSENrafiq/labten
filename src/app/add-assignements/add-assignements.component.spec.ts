import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignementsComponent } from './add-assignements.component';

describe('AddAssignementsComponent', () => {
  let component: AddAssignementsComponent;
  let fixture: ComponentFixture<AddAssignementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
