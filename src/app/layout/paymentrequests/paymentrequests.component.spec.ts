import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentrequestsComponent } from './paymentrequests.component';

describe('PaymentrequestsComponent', () => {
  let component: PaymentrequestsComponent;
  let fixture: ComponentFixture<PaymentrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
