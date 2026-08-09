import { Component, input } from '@angular/core';
import { Project } from '../../../models';

/**
 * Project card used on the home page and projects page. Renders a media
 * tile (with a gradient monogram fallback), outcome-first summary, tags,
 * and source/live links.
 */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
