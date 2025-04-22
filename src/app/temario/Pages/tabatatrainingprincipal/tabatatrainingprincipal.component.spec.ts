import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabatatrainingprincipalComponent } from './tabatatrainingprincipal.component';

describe('TabatatrainingprincipalComponent', () => {
  let component: TabatatrainingprincipalComponent;
  let fixture: ComponentFixture<TabatatrainingprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabatatrainingprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabatatrainingprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
