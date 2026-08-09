import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core';
import { FAQS, SITE, SOCIAL_LINKS } from '../../data';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [SocialLinks, SectionHeader, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly site = SITE;
  protected readonly faqs = FAQS;
  protected readonly socialLinks = SOCIAL_LINKS.filter((l) => l.url.length > 0);

  protected readonly channels = [
    {
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      note: 'Fastest way to reach me — replies within 24h on weekdays.',
    },
    {
      label: 'LinkedIn',
      value: 'in/rushil-shah-22a4b61a6',
      href: SITE.social.linkedin,
      note: 'For longer intros and professional context.',
    },
    {
      label: 'GitHub',
      value: '@rushilshah23',
      href: SITE.social.github,
      note: 'Code, experiments and side projects.',
    },
  ];

  protected readonly steps = [
    {
      title: 'Discovery call',
      text: 'A free 20-minute call to understand your goal, constraints and timeline.',
    },
    {
      title: 'Written scope',
      text: 'A fixed-price scope with milestones and a delivery date — no surprises.',
    },
    {
      title: 'Ship & iterate',
      text: 'Working software every 1–2 weeks, deployed to production, with support after launch.',
    },
  ];

  ngOnInit(): void {
    this.seo.applySection('contact');
    this.seo.injectJsonLd('json-ld-contact-faq', this.seo.faqSchema());
  }
}
