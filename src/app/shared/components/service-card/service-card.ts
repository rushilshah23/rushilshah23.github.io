import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../../models';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  readonly service = input.required<Service>();
}
