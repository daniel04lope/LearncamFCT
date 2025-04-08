import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagesprincipalComponent } from './mainpagesprincipal.component';

describe('MainpagesprincipalComponent', () => {
  let component: MainpagesprincipalComponent;
  let fixture: ComponentFixture<MainpagesprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainpagesprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainpagesprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
