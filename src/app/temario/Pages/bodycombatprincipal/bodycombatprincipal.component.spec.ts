import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycombatprincipalComponent } from './bodycombatprincipal.component';

describe('BodycombatprincipalComponent', () => {
  let component: BodycombatprincipalComponent;
  let fixture: ComponentFixture<BodycombatprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodycombatprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodycombatprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
