import { Component, input } from '@angular/core';
import { SkillDomain } from '../../../models';
import { SkillCard } from '../skill-card/skill-card';

@Component({
  selector: 'app-skill-domain',
  imports: [SkillCard],
  templateUrl: './skill-domain.html',
  styleUrl: './skill-domain.css',
})
export class SkillDomainBlock {
  readonly domain = input.required<SkillDomain>();
}
