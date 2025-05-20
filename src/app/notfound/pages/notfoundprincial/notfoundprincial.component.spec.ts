import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundprincialComponent } from './notfoundprincial.component';

describe('NotfoundprincialComponent', () => {
  let component: NotfoundprincialComponent;
  let fixture: ComponentFixture<NotfoundprincialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotfoundprincialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotfoundprincialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
