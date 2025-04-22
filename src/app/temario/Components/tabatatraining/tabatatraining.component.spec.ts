import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabatatrainingComponent } from './tabatatraining.component';

describe('TabatatrainingComponent', () => {
  let component: TabatatrainingComponent;
  let fixture: ComponentFixture<TabatatrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabatatrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabatatrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
