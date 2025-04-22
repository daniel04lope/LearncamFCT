import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiasuaveprincipalComponent } from './gimnasiasuaveprincipal.component';

describe('GimnasiasuaveprincipalComponent', () => {
  let component: GimnasiasuaveprincipalComponent;
  let fixture: ComponentFixture<GimnasiasuaveprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GimnasiasuaveprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GimnasiasuaveprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
