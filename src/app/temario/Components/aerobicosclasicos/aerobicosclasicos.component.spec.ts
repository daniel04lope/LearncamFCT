import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerobicosclasicosComponent } from './aerobicosclasicos.component';

describe('AerobicosclasicosComponent', () => {
  let component: AerobicosclasicosComponent;
  let fixture: ComponentFixture<AerobicosclasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AerobicosclasicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AerobicosclasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
