import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaparaprincipiantesComponent } from './yogaparaprincipiantes.component';

describe('YogaparaprincipiantesComponent', () => {
  let component: YogaparaprincipiantesComponent;
  let fixture: ComponentFixture<YogaparaprincipiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaparaprincipiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaparaprincipiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
