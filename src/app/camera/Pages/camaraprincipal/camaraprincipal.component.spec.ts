import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraprincipalComponent } from './camaraprincipal.component';

describe('CamaraprincipalComponent', () => {
  let component: CamaraprincipalComponent;
  let fixture: ComponentFixture<CamaraprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamaraprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamaraprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
