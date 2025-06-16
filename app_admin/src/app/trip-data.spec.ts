import { TestBed } from '@angular/core/testing';
import { TripDataService } from './trip-data.service'; // ✅ FIXED

describe('TripDataService', () => {
  let service: TripDataService; // ✅ FIXED

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDataService); // ✅ FIXED
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});