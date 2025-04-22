import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiasuaveComponent } from './gimnasiasuave.component';

describe('GimnasiasuaveComponent', () => {
  let component: GimnasiasuaveComponent;
  let fixture: ComponentFixture<GimnasiasuaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GimnasiasuaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GimnasiasuaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
