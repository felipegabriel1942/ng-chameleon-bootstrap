import { TestBed } from '@angular/core/testing';

import { NgChameleonBootstrapService } from './ng-chameleon-bootstrap.service';

describe('NgChameleonBootstrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgChameleonBootstrapService = TestBed.get(NgChameleonBootstrapService);
    expect(service).toBeTruthy();
  });
});
