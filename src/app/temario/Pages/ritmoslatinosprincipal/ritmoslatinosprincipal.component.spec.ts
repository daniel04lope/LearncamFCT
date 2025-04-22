import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitmoslatinosprincipalComponent } from './ritmoslatinosprincipal.component';

describe('RitmoslatinosprincipalComponent', () => {
  let component: RitmoslatinosprincipalComponent;
  let fixture: ComponentFixture<RitmoslatinosprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RitmoslatinosprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RitmoslatinosprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
