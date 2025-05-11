import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacedetectionprincipalComponent } from './facedetectionprincipal.component';

describe('FacedetectionprincipalComponent', () => {
  let component: FacedetectionprincipalComponent;
  let fixture: ComponentFixture<FacedetectionprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacedetectionprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacedetectionprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
