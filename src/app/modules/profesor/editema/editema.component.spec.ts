import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemaComponent } from './editema.component';

describe('EditemaComponent', () => {
  let component: EditemaComponent;
  let fixture: ComponentFixture<EditemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
