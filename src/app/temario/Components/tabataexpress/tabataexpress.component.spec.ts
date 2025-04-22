import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabataexpressComponent } from './tabataexpress.component';

describe('TabataexpressComponent', () => {
  let component: TabataexpressComponent;
  let fixture: ComponentFixture<TabataexpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabataexpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabataexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
