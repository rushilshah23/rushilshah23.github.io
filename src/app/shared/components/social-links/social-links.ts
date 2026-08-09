import { Component, input } from '@angular/core';
import { SocialLink } from '../../../models';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  readonly links = input.required<SocialLink[]>();
}
