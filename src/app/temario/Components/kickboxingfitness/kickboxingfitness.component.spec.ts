import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickboxingfitnessComponent } from './kickboxingfitness.component';

describe('KickboxingfitnessComponent', () => {
  let component: KickboxingfitnessComponent;
  let fixture: ComponentFixture<KickboxingfitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KickboxingfitnessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KickboxingfitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
