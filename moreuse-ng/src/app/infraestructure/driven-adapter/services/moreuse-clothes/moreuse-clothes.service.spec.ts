import { TestBed } from '@angular/core/testing';

import { MoreuseClothesService } from './moreuse-clothes.service';

describe('MoreuseClothesService', () => {
  let service: MoreuseClothesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoreuseClothesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
