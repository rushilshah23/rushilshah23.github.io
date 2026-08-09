import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core';
import { SERVICES } from '../../data';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [ServiceCard, SectionHeader, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly services = SERVICES;

  ngOnInit(): void {
    this.seo.applySection('services');
    this.seo.injectJsonLd(
      'json-ld-professional-service',
      this.seo.professionalServiceSchema(),
    );
  }
}
