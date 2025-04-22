import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumbafitnessdesplegableComponent } from './zumbafitnessdesplegable.component';

describe('ZumbafitnessdesplegableComponent', () => {
  let component: ZumbafitnessdesplegableComponent;
  let fixture: ComponentFixture<ZumbafitnessdesplegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZumbafitnessdesplegableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZumbafitnessdesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
