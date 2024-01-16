import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDeTurmasComponent } from './consulta-de-turmas.component';

describe('ConsultaDeTurmasComponent', () => {
  let component: ConsultaDeTurmasComponent;
  let fixture: ComponentFixture<ConsultaDeTurmasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaDeTurmasComponent]
    });
    fixture = TestBed.createComponent(ConsultaDeTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
