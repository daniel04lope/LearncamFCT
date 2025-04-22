import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiavanzadoComponent } from './taichiavanzado.component';

describe('TaichiavanzadoComponent', () => {
  let component: TaichiavanzadoComponent;
  let fixture: ComponentFixture<TaichiavanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaichiavanzadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaichiavanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
