import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProejercicioComponent } from './proejercicio.component';

describe('ProejercicioComponent', () => {
  let component: ProejercicioComponent;
  let fixture: ComponentFixture<ProejercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProejercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProejercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
