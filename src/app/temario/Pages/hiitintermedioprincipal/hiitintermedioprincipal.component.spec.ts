import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiitintermedioprincipalComponent } from './hiitintermedioprincipal.component';

describe('HiitintermedioprincipalComponent', () => {
  let component: HiitintermedioprincipalComponent;
  let fixture: ComponentFixture<HiitintermedioprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiitintermedioprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiitintermedioprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
