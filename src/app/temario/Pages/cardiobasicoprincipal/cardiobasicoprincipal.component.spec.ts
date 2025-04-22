import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiobasicoprincipalComponent } from './cardiobasicoprincipal.component';

describe('CardiobasicoprincipalComponent', () => {
  let component: CardiobasicoprincipalComponent;
  let fixture: ComponentFixture<CardiobasicoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardiobasicoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiobasicoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
