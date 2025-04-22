import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabataexpressprincipalComponent } from './tabataexpressprincipal.component';

describe('TabataexpressprincipalComponent', () => {
  let component: TabataexpressprincipalComponent;
  let fixture: ComponentFixture<TabataexpressprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabataexpressprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabataexpressprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
