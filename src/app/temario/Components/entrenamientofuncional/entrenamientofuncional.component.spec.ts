import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientofuncionalComponent } from './entrenamientofuncional.component';

describe('EntrenamientofuncionalComponent', () => {
  let component: EntrenamientofuncionalComponent;
  let fixture: ComponentFixture<EntrenamientofuncionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientofuncionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientofuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
