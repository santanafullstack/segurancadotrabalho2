import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMatriculaComponent } from './editar-matricula.component';

describe('EditarMatriculaComponent', () => {
  let component: EditarMatriculaComponent;
  let fixture: ComponentFixture<EditarMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMatriculaComponent]
    });
    fixture = TestBed.createComponent(EditarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
