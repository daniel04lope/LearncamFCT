import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprincipalComponent } from './loginprincipal.component';

describe('LoginprincipalComponent', () => {
  let component: LoginprincipalComponent;
  let fixture: ComponentFixture<LoginprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
