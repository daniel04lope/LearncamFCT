import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaparaexpertosprincipalComponent } from './yogaparaexpertosprincipal.component';

describe('YogaparaexpertosprincipalComponent', () => {
  let component: YogaparaexpertosprincipalComponent;
  let fixture: ComponentFixture<YogaparaexpertosprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaparaexpertosprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogaparaexpertosprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
