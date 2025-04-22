import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiramientosymovilidadComponent } from './estiramientosymovilidad.component';

describe('EstiramientosymovilidadComponent', () => {
  let component: EstiramientosymovilidadComponent;
  let fixture: ComponentFixture<EstiramientosymovilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstiramientosymovilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstiramientosymovilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
