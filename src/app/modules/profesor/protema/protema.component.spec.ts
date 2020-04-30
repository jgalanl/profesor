import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtemaComponent } from './protema.component';

describe('ProtemaComponent', () => {
  let component: ProtemaComponent;
  let fixture: ComponentFixture<ProtemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
