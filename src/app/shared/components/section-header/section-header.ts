import { Component, input } from '@angular/core';

/**
 * Consistent section heading: mono label + title + optional lead paragraph.
 * Use `level` to control the heading tag: 'h1' for top-level page headers,
 * 'h2' (default) for sections within a page.
 */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader {
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>();
  readonly level = input<'h1' | 'h2'>('h2');
}
