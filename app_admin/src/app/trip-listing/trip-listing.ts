import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { TripDataService } from '../trip-data.service';
import { Trip } from '../trip'; 
@Component({
  standalone: true,
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  imports: [CommonModule, TripCard],
})
export class TripListing {
  trips: Trip[] = []; 

  constructor(private tripService: TripDataService) {
    this.trips = this.tripService.getTrips(); 
  }
}