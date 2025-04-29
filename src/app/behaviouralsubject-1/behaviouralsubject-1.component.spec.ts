import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviouralsubject1Component } from './behaviouralsubject-1.component';

describe('Behaviouralsubject1Component', () => {
  let component: Behaviouralsubject1Component;
  let fixture: ComponentFixture<Behaviouralsubject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviouralsubject1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behaviouralsubject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
