import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiitparaquemarComponent } from './hiitparaquemar.component';

describe('HiitparaquemarComponent', () => {
  let component: HiitparaquemarComponent;
  let fixture: ComponentFixture<HiitparaquemarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiitparaquemarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiitparaquemarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
