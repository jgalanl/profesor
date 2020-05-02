import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaclasesComponent } from './listaclases.component';

describe('ListaclasesComponent', () => {
  let component: ListaclasesComponent;
  let fixture: ComponentFixture<ListaclasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaclasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaclasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
