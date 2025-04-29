import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistropaginaprincipalComponent } from './registropaginaprincipal.component';

describe('RegistropaginaprincipalComponent', () => {
  let component: RegistropaginaprincipalComponent;
  let fixture: ComponentFixture<RegistropaginaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistropaginaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistropaginaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
