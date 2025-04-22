import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiitparaquemargrasaprincipalComponent } from './hiitparaquemargrasaprincipal.component';

describe('HiitparaquemargrasaprincipalComponent', () => {
  let component: HiitparaquemargrasaprincipalComponent;
  let fixture: ComponentFixture<HiitparaquemargrasaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiitparaquemargrasaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiitparaquemargrasaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
