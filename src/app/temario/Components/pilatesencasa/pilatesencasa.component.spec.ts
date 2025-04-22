import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilatesencasaComponent } from './pilatesencasa.component';

describe('PilatesencasaComponent', () => {
  let component: PilatesencasaComponent;
  let fixture: ComponentFixture<PilatesencasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilatesencasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilatesencasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
