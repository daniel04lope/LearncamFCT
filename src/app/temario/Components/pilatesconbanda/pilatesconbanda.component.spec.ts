import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilatesconbandaComponent } from './pilatesconbanda.component';

describe('PilatesconbandaComponent', () => {
  let component: PilatesconbandaComponent;
  let fixture: ComponentFixture<PilatesconbandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilatesconbandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilatesconbandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
