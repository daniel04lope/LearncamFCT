import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichibasicoprincipalComponent } from './taichibasicoprincipal.component';

describe('TaichibasicoprincipalComponent', () => {
  let component: TaichibasicoprincipalComponent;
  let fixture: ComponentFixture<TaichibasicoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaichibasicoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaichibasicoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
