import { Component } from '@angular/core';
import { TripListing } from './trip-listing/trip-listing';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, TripListing]
})
export class AppComponent {}