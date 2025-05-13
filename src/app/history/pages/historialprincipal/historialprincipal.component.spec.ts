import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialprincipalComponent } from './historialprincipal.component';

describe('HistorialprincipalComponent', () => {
  let component: HistorialprincipalComponent;
  let fixture: ComponentFixture<HistorialprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
