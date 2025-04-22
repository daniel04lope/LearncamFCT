import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitodefuerzafuncionalprincipalComponent } from './circuitodefuerzafuncionalprincipal.component';

describe('CircuitodefuerzafuncionalprincipalComponent', () => {
  let component: CircuitodefuerzafuncionalprincipalComponent;
  let fixture: ComponentFixture<CircuitodefuerzafuncionalprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitodefuerzafuncionalprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircuitodefuerzafuncionalprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
