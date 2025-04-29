import { TestBed } from '@angular/core/testing';

import { BehaviouralsubjectService } from './behaviouralsubject.service';

describe('BehaviouralsubjectService', () => {
  let service: BehaviouralsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviouralsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
