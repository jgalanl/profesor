import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProasignaturaComponent } from './proasignatura.component';

describe('ProasignaturaComponent', () => {
  let component: ProasignaturaComponent;
  let fixture: ComponentFixture<ProasignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProasignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
