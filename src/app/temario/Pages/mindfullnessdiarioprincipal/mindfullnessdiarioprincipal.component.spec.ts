import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfullnessdiarioprincipalComponent } from './mindfullnessdiarioprincipal.component';

describe('MindfullnessdiarioprincipalComponent', () => {
  let component: MindfullnessdiarioprincipalComponent;
  let fixture: ComponentFixture<MindfullnessdiarioprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfullnessdiarioprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfullnessdiarioprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
