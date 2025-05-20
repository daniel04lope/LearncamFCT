import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesprincipalComponent } from './ajustesprincipal.component';

describe('AjustesprincipalComponent', () => {
  let component: AjustesprincipalComponent;
  let fixture: ComponentFixture<AjustesprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjustesprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjustesprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
