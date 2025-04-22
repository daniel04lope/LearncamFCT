import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailedeportivoprincipalComponent } from './bailedeportivoprincipal.component';

describe('BailedeportivoprincipalComponent', () => {
  let component: BailedeportivoprincipalComponent;
  let fixture: ComponentFixture<BailedeportivoprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BailedeportivoprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BailedeportivoprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
