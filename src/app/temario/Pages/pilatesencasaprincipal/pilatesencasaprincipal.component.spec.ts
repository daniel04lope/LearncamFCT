import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilatesencasaprincipalComponent } from './pilatesencasaprincipal.component';

describe('PilatesencasaprincipalComponent', () => {
  let component: PilatesencasaprincipalComponent;
  let fixture: ComponentFixture<PilatesencasaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilatesencasaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilatesencasaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
