import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioenparejaprincipalComponent } from './cardioenparejaprincipal.component';

describe('CardioenparejaprincipalComponent', () => {
  let component: CardioenparejaprincipalComponent;
  let fixture: ComponentFixture<CardioenparejaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardioenparejaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardioenparejaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
