import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacionyrespiracionComponent } from './meditacionyrespiracion.component';

describe('MeditacionyrespiracionComponent', () => {
  let component: MeditacionyrespiracionComponent;
  let fixture: ComponentFixture<MeditacionyrespiracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditacionyrespiracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditacionyrespiracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
