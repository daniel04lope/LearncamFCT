import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiaparamayoresComponent } from './gimnasiaparamayores.component';

describe('GimnasiaparamayoresComponent', () => {
  let component: GimnasiaparamayoresComponent;
  let fixture: ComponentFixture<GimnasiaparamayoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GimnasiaparamayoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GimnasiaparamayoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
