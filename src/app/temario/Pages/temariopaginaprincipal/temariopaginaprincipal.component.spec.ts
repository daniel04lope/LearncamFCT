import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemariopaginaprincipalComponent } from './temariopaginaprincipal.component';

describe('TemariopaginaprincipalComponent', () => {
  let component: TemariopaginaprincipalComponent;
  let fixture: ComponentFixture<TemariopaginaprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemariopaginaprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemariopaginaprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
