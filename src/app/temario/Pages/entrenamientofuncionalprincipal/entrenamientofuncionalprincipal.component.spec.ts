import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenamientofuncionalprincipalComponent } from './entrenamientofuncionalprincipal.component';

describe('EntrenamientofuncionalprincipalComponent', () => {
  let component: EntrenamientofuncionalprincipalComponent;
  let fixture: ComponentFixture<EntrenamientofuncionalprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenamientofuncionalprincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrenamientofuncionalprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
