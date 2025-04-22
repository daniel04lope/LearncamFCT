import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiavanzadoprincipalComponent } from './taichiavanzadoprincipal.component';

describe('TaichiavanzadoprincipalComponent', () => {
  let component: TaichiavanzadoprincipalComponent;
  let fixture: ComponentFixture<TaichiavanzadoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaichiavanzadoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaichiavanzadoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
