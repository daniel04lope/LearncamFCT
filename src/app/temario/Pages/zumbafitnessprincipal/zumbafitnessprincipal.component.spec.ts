import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZumbafitnessprincipalComponent } from './zumbafitnessprincipal.component';

describe('ZumbafitnessprincipalComponent', () => {
  let component: ZumbafitnessprincipalComponent;
  let fixture: ComponentFixture<ZumbafitnessprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZumbafitnessprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZumbafitnessprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
