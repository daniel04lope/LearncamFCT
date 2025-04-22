import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiaparamayoresprincipalComponent } from './gimnasiaparamayoresprincipal.component';

describe('GimnasiaparamayoresprincipalComponent', () => {
  let component: GimnasiaparamayoresprincipalComponent;
  let fixture: ComponentFixture<GimnasiaparamayoresprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GimnasiaparamayoresprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GimnasiaparamayoresprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
