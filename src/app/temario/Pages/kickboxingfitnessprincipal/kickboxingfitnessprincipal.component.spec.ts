import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickboxingfitnessprincipalComponent } from './kickboxingfitnessprincipal.component';

describe('KickboxingfitnessprincipalComponent', () => {
  let component: KickboxingfitnessprincipalComponent;
  let fixture: ComponentFixture<KickboxingfitnessprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KickboxingfitnessprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KickboxingfitnessprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
