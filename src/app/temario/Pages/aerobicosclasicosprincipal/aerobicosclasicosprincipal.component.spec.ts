import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerobicosclasicosprincipalComponent } from './aerobicosclasicosprincipal.component';

describe('AerobicosclasicosprincipalComponent', () => {
  let component: AerobicosclasicosprincipalComponent;
  let fixture: ComponentFixture<AerobicosclasicosprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerobicosclasicosprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AerobicosclasicosprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
