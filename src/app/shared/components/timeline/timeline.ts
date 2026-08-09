import { Component, input } from '@angular/core';
import { Experience } from '../../../models';

/**
 * Vertical timeline of professional experience. Each entry is a card with
 * period, role, company, proof points and domain tags.
 */
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  readonly items = input.required<Experience[]>();
}
