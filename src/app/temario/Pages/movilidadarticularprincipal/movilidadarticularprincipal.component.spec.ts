import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilidadarticularprincipalComponent } from './movilidadarticularprincipal.component';

describe('MovilidadarticularprincipalComponent', () => {
  let component: MovilidadarticularprincipalComponent;
  let fixture: ComponentFixture<MovilidadarticularprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovilidadarticularprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovilidadarticularprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
