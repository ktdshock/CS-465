import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-trip-card',
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css'],
  imports: [CommonModule]
})
export class TripCard {
  @Input() trip: any;
}