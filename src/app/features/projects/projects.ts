import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core';
import { PROJECTS, SITE } from '../../data';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, SectionHeader, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly projects = PROJECTS;
  protected readonly site = SITE;

  ngOnInit(): void {
    this.seo.applySection('projects');
  }
}
