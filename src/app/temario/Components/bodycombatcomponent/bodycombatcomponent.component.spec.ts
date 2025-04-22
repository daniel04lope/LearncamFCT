import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycombatcomponentComponent } from './bodycombatcomponent.component';

describe('BodycombatcomponentComponent', () => {
  let component: BodycombatcomponentComponent;
  let fixture: ComponentFixture<BodycombatcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodycombatcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodycombatcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
