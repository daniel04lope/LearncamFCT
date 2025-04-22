import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmoslatinosComponent } from './ritmoslatinos.component';

describe('RitmoslatinosComponent', () => {
  let component: RitmoslatinosComponent;
  let fixture: ComponentFixture<RitmoslatinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitmoslatinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RitmoslatinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
