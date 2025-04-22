import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitpaprincipiantesComponent } from './crossfitpaprincipiantes.component';

describe('CrossfitpaprincipiantesComponent', () => {
  let component: CrossfitpaprincipiantesComponent;
  let fixture: ComponentFixture<CrossfitpaprincipiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossfitpaprincipiantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossfitpaprincipiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
