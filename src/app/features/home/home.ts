import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core';
import {
  EXPERIENCE,
  EXPERTISE,
  HERO,
  INDUSTRIES,
  PROJECTS,
  SECTIONS,
  SERVICES,
  STATS,
  SITE,
} from '../../data';
import { EquityCurve } from '../../shared/components/equity-curve/equity-curve';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TickerTape } from '../../shared/components/ticker-tape/ticker-tape';
import { Timeline } from '../../shared/components/timeline/timeline';
import { TypeWriter } from '../../shared/components/typewriter/typewriter';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    ServiceCard,
    ProjectCard,
    SectionHeader,
    TypeWriter,
    TickerTape,
    EquityCurve,
    Timeline,
    RevealDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly hero = HERO;
  protected readonly site = SITE;
  protected readonly industries = INDUSTRIES;
  protected readonly stats = STATS;
  protected readonly experience = EXPERIENCE;
  protected readonly featuredServices = SERVICES.slice(0, 3);
  protected readonly featuredProjects = PROJECTS.filter((p) => p.featured);

  /**
   * Ticker tape content, derived from the same data as the Expertise page
   * and the Industries section — one source of truth, no magic strings.
   */
  protected readonly tickerItems: string[] = [
    ...EXPERTISE.flatMap((domain) => domain.skills.map((s) => s.name)),
    ...INDUSTRIES.map((industry) => industry.name),
  ];

  ngOnInit(): void {
    this.seo.applyPageMeta(SECTIONS['home'].meta);
    this.seo.injectJsonLd('json-ld-person', this.seo.personSchema());
    this.seo.injectJsonLd('json-ld-website', this.seo.websiteSchema());
    this.seo.injectJsonLd('json-ld-home-breadcrumb', this.seo.breadcrumbSchema([]));
  }
}
