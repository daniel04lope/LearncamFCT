import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilidadarticularComponent } from './movilidadarticular.component';

describe('MovilidadarticularComponent', () => {
  let component: MovilidadarticularComponent;
  let fixture: ComponentFixture<MovilidadarticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovilidadarticularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovilidadarticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
