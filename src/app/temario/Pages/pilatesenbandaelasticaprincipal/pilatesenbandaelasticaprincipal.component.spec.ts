import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilatesenbandaelasticaprincipalComponent } from './pilatesenbandaelasticaprincipal.component';

describe('PilatesenbandaelasticaprincipalComponent', () => {
  let component: PilatesenbandaelasticaprincipalComponent;
  let fixture: ComponentFixture<PilatesenbandaelasticaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilatesenbandaelasticaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilatesenbandaelasticaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
