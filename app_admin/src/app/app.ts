import { Component } from '@angular/core';
import { TripListing } from './trip-listing/trip-listing'; // ✅ make sure path is correct
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, TripListing] // ✅ TripListing must be included here!
})
export class AppComponent {}