import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWeightInputComponent } from './ng-weight-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

describe('NgWeightInputComponent', () => {
  let component: NgWeightInputComponent;
  let fixture: ComponentFixture<NgWeightInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgWeightInputComponent],
      imports: [ReactiveFormsModule, TextMaskModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
