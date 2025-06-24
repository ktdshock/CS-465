import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TripDataService {
  getTrips() {
    return [
      {
        name: 'Island Getaway',
        code: 'ISL1001',
        length: 7,
        start: '2025-07-15',
        resort: 'Sunny Shores',
        perPerson: 1299.99,
      },
      {
        name: 'Mountain Retreat',
        code: 'MTN2045',
        length: 5,
        start: '2025-08-10',
        resort: 'Snowy Peaks Lodge',
        perPerson: 999.99,
      },
      {
        name: 'Safari Adventure',
        code: 'SFR3300',
        length: 10,
        start: '2025-09-01',
        resort: 'Savannah Plains Camp',
        perPerson: 1899.99,
      },
    ];
  }
}