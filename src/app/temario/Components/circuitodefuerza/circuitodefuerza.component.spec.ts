import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitodefuerzaComponent } from './circuitodefuerza.component';

describe('CircuitodefuerzaComponent', () => {
  let component: CircuitodefuerzaComponent;
  let fixture: ComponentFixture<CircuitodefuerzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitodefuerzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircuitodefuerzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
