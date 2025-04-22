import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiobasicoComponent } from './cardiobasico.component';

describe('CardiobasicoComponent', () => {
  let component: CardiobasicoComponent;
  let fixture: ComponentFixture<CardiobasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardiobasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardiobasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
