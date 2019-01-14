import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoffersComponent } from './editoffers.component';

describe('EditoffersComponent', () => {
  let component: EditoffersComponent;
  let fixture: ComponentFixture<EditoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
