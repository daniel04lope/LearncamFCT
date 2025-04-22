import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessdiarioComponent } from './mindfulnessdiario.component';

describe('MindfulnessdiarioComponent', () => {
  let component: MindfulnessdiarioComponent;
  let fixture: ComponentFixture<MindfulnessdiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfulnessdiarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfulnessdiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
