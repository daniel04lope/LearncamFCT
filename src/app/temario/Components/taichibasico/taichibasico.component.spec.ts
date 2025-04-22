import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichibasicoComponent } from './taichibasico.component';

describe('TaichibasicoComponent', () => {
  let component: TaichibasicoComponent;
  let fixture: ComponentFixture<TaichibasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaichibasicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaichibasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
