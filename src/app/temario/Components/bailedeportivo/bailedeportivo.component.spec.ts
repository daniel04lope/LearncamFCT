import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailedeportivoComponent } from './bailedeportivo.component';

describe('BailedeportivoComponent', () => {
  let component: BailedeportivoComponent;
  let fixture: ComponentFixture<BailedeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BailedeportivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BailedeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
