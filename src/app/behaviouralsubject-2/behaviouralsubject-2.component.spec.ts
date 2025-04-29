import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviouralsubject2Component } from './behaviouralsubject-2.component';

describe('Behaviouralsubject2Component', () => {
  let component: Behaviouralsubject2Component;
  let fixture: ComponentFixture<Behaviouralsubject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviouralsubject2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behaviouralsubject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
