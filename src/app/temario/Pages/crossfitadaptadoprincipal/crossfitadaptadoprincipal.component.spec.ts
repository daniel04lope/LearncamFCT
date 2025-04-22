import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfitadaptadoprincipalComponent } from './crossfitadaptadoprincipal.component';

describe('CrossfitadaptadoprincipalComponent', () => {
  let component: CrossfitadaptadoprincipalComponent;
  let fixture: ComponentFixture<CrossfitadaptadoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossfitadaptadoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossfitadaptadoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
