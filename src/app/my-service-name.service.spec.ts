import { TestBed } from '@angular/core/testing';

import { MyServiceNameService } from './my-service-name.service';

describe('MyServiceNameService', () => {
  let service: MyServiceNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
