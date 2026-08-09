import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core';
import { EXPERTISE } from '../../data';
import { SkillDomainBlock } from '../../shared/components/skill-domain/skill-domain';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

@Component({
  selector: 'app-expertise',
  imports: [SkillDomainBlock, SectionHeader, RevealDirective],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css',
})
export class Expertise implements OnInit {
  private readonly seo = inject(SeoService);

  protected readonly domains = EXPERTISE;

  ngOnInit(): void {
    this.seo.applySection('expertise');
  }
}
