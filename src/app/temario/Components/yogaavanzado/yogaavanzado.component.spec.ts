import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaavanzadoComponent } from './yogaavanzado.component';

describe('YogaavanzadoComponent', () => {
  let component: YogaavanzadoComponent;
  let fixture: ComponentFixture<YogaavanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaavanzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaavanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
