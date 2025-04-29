import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamscomponentComponent } from './paramscomponent.component';

describe('ParamscomponentComponent', () => {
  let component: ParamscomponentComponent;
  let fixture: ComponentFixture<ParamscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamscomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
