import { TestBed, waitForAsync } from '@angular/core/testing';

import { SharedDataAccessModule } from './shared-domain.module';

describe('SharedDataAccessModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataAccessModule).toBeDefined();
  });
});
