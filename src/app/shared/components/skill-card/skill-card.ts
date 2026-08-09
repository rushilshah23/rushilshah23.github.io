import { Component, input } from '@angular/core';
import { Skill } from '../../../models';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  readonly skill = input.required<Skill>();
}
