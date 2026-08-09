import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core';
import { ACHIEVEMENTS, EXPERIENCE, SITE } from '../../data';
import { Timeline } from '../../shared/components/timeline/timeline';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Timeline, SectionHeader, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;
  protected readonly experience = EXPERIENCE;
  protected readonly achievements = ACHIEVEMENTS;

  protected readonly facts = [
    { label: 'Based in', value: 'Mumbai, India' },
    { label: 'Experience', value: SITE.experience },
    { label: 'Focus', value: 'Fintech · Fullstack · Cloud' },
    { label: 'Availability', value: 'Freelance & fractional' },
  ];

  ngOnInit(): void {
    this.seo.applySection('about');
    this.seo.injectJsonLd('json-ld-about-person', this.seo.personSchema());
  }
}
