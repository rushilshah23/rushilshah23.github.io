import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

/**
 * A milestone on the career equity curve. `value` is a 0..1 position on the
 * value axis (1 = top of the chart), not a claim about absolute output.
 */
export interface EquityMilestone {
  /** Short caption shown above the point, e.g. '2021'. */
  year: string;
  /** Descriptor shown under the point. */
  label: string;
  /** Normalized vertical position (0..1). */
  value: number;
  /** One-liner revealed on click/tap. */
  detail: string;
}

/**
 * EquityCurve — the hero chart: Rushil's career drawn as a rising equity
 * curve with milestone markers, the same visual language as the trading
 * tools he builds.
 *
 * SSR-safe: the server renders the fully-drawn chart (no animation, good for
 * SEO and first paint); in the browser the line draws itself and the points
 * pop in sequence. Reduced-motion users get the static chart.
 */
@Component({
  selector: 'app-equity-curve',
  templateUrl: './equity-curve.html',
  styleUrl: './equity-curve.css',
})
export class EquityCurve implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly milestones: EquityMilestone[] = [
    { year: '2020', label: 'IAHV intern', value: 0.1, detail: 'Led a team of 12 building a Flutter + Node.js + Firebase watershed-management app for Art of Living across Maharashtra.' },
    { year: '2022', label: 'Datacurate', value: 0.3, detail: 'Quote-to-policy systems for HDFC ERGO & Kotak Life — 8-day quotes cut to near-instant, OCR pipelines, ETL +50%.' },
    { year: '2025', label: 'Lending NBFC', value: 0.62, detail: 'LOS–LMS integration at Western Capital Advisors — ₹200Cr loan book, 1,500+ employee-hours saved per month.' },
    { year: '2026', label: 'Senior engineer', value: 0.85, detail: 'Platform & GenAI infrastructure at Go Digital (energy) — Terraform AWS, Akamai security shield, LangChain + agentic tooling.' },
    { year: 'NOW', label: '5+ yrs shipping', value: 1, detail: 'Agentic AI research loop (Hermes) — nightly cost-aware backtests, every run archived, strongest setups curated.' },
  ];

  private readonly width = 640;
  private readonly height = 260;
  private readonly padX = 76;
  private readonly padTop = 44;
  private readonly padBottom = 56;

  /** True when the draw-on animation should run (browser, motion allowed). */
  protected readonly drawn = signal(false);

  /** Index of the milestone currently expanded via click/tap, or null. */
  protected readonly selected = signal<number | null>(null);

  protected readonly selectedMilestone = computed(() =>
    this.selected() !== null ? this.milestones[this.selected()!] : null,
  );

  /** Horizontal chart-grid lines (theme-aware dashes). */
  protected readonly gridLines = computed(() => {
    const top = this.y(1);
    const bottom = this.y(0);
    const step = (bottom - top) / 4;
    return [0, 1, 2, 3, 4].map((i) => top + i * step);
  });

  ngOnInit(): void {
    this.drawn.set(
      isPlatformBrowser(this.platformId) && !this.prefersReducedMotion(),
    );
  }

  protected x(i: number): number {
    const n = this.milestones.length;
    return this.padX + (i * (this.width - 2 * this.padX)) / (n - 1);
  }

  protected y(value: number): number {
    return (
      this.height -
      this.padBottom -
      value * (this.height - this.padTop - this.padBottom)
    );
  }

  protected linePath(): string {
    return this.milestones
      .map((m, i) => `${i === 0 ? 'M' : 'L'} ${this.x(i)} ${this.y(m.value)}`)
      .join(' ');
  }

  protected areaPath(): string {
    const first = this.x(0);
    const last = this.x(this.milestones.length - 1);
    const base = this.y(0);
    return `${this.linePath()} L ${last} ${base} L ${first} ${base} Z`;
  }

  protected pointDelay(i: number): string {
    return `${1 + i * 0.22}s`;
  }

  /** Toggle a milestone's detail card (tap again to close). */
  protected toggle(i: number): void {
    this.selected.update((v) => (v === i ? null : i));
  }

  /** Clamped horizontal position (%) for the detail card. */
  protected detailLeft(i: number): string {
    const pct = (this.x(i) / this.width) * 100;
    return `${Math.min(86, Math.max(14, pct))}%`;
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
