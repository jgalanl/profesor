import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProlenguaComponent } from './prolengua.component';

describe('ProlenguaComponent', () => {
  let component: ProlenguaComponent;
  let fixture: ComponentFixture<ProlenguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlenguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlenguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
