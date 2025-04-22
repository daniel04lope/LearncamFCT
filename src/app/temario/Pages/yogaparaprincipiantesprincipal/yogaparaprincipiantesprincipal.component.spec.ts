import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaparaprincipiantesprincipalComponent } from './yogaparaprincipiantesprincipal.component';

describe('YogaparaprincipiantesprincipalComponent', () => {
  let component: YogaparaprincipiantesprincipalComponent;
  let fixture: ComponentFixture<YogaparaprincipiantesprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaparaprincipiantesprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaparaprincipiantesprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
