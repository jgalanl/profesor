import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosAsignaturaComponent } from './resultados-asignatura.component';

describe('ResultadosAsignaturaComponent', () => {
  let component: ResultadosAsignaturaComponent;
  let fixture: ComponentFixture<ResultadosAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
