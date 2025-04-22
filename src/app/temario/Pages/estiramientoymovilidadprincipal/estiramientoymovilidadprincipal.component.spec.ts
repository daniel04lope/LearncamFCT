import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiramientoymovilidadprincipalComponent } from './estiramientoymovilidadprincipal.component';

describe('EstiramientoymovilidadprincipalComponent', () => {
  let component: EstiramientoymovilidadprincipalComponent;
  let fixture: ComponentFixture<EstiramientoymovilidadprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstiramientoymovilidadprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstiramientoymovilidadprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
