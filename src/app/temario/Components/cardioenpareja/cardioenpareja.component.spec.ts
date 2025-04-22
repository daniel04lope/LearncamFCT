import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioenparejaComponent } from './cardioenpareja.component';

describe('CardioenparejaComponent', () => {
  let component: CardioenparejaComponent;
  let fixture: ComponentFixture<CardioenparejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardioenparejaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardioenparejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
