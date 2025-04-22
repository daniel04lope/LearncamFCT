import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacionyrespiracionprincipalComponent } from './meditacionyrespiracionprincipal.component';

describe('MeditacionyrespiracionprincipalComponent', () => {
  let component: MeditacionyrespiracionprincipalComponent;
  let fixture: ComponentFixture<MeditacionyrespiracionprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeditacionyrespiracionprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeditacionyrespiracionprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
