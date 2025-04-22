import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiitintermedioComponent } from './hiitintermedio.component';

describe('HiitintermedioComponent', () => {
  let component: HiitintermedioComponent;
  let fixture: ComponentFixture<HiitintermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiitintermedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiitintermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
