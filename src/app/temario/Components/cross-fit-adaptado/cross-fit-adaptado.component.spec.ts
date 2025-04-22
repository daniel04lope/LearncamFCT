import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFitAdaptadoComponent } from './cross-fit-adaptado.component';

describe('CrossFitAdaptadoComponent', () => {
  let component: CrossFitAdaptadoComponent;
  let fixture: ComponentFixture<CrossFitAdaptadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossFitAdaptadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossFitAdaptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
