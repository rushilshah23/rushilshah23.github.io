import { Component, computed, input } from '@angular/core';

/**
 * TickerTape — a stock-ticker-style marquee of skills, domains and tools.
 *
 * The signature visual of the site: Rushil's stack scrolling like a market
 * tape. Pure decoration (aria-hidden) — the list is rendered twice and the
 * track translates by exactly one list width for a seamless loop.
 *
 * Accessibility: `role="presentation"` + `aria-hidden` (decorative), and the
 * animation is disabled under `prefers-reduced-motion`.
 */
@Component({
  selector: 'app-ticker-tape',
  templateUrl: './ticker-tape.html',
  styleUrl: './ticker-tape.css',
})
export class TickerTape {
  /** Symbols to scroll, e.g. ['ANGULAR', 'PYTHON', ...]. */
  readonly items = input<string[]>([]);

  /**
   * Items rendered twice so the track can loop seamlessly at translateX(-50%).
   * The ▲/▼ glyph alternation stays consistent across the seam because both
   * halves share the same parity sequence.
   */
  protected readonly ticks = computed<string[]>(() => [
    ...this.items(),
    ...this.items(),
  ]);
}
