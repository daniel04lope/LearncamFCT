import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolisticComponentComponent } from './holistic-component.component';

describe('HolisticComponentComponent', () => {
  let component: HolisticComponentComponent;
  let fixture: ComponentFixture<HolisticComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolisticComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolisticComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
