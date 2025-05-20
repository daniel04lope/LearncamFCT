import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatrocerocuatroComponent } from './cuatrocerocuatro.component';

describe('CuatrocerocuatroComponent', () => {
  let component: CuatrocerocuatroComponent;
  let fixture: ComponentFixture<CuatrocerocuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuatrocerocuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuatrocerocuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
