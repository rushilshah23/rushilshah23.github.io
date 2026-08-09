import { Component, PLATFORM_ID, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Typewriter effect cycling through a list of words/phrases.
 * SSR-safe: the first word is rendered statically in prerendered HTML;
 * the typing animation only runs in the browser and is disabled for
 * users with `prefers-reduced-motion`.
 */
@Component({
  selector: 'app-typewriter',
  template: `
    <span class="typewriter" aria-live="polite">
      <span class="typewriter__text">{{ text() }}</span>
      <span class="typewriter__caret" aria-hidden="true"></span>
    </span>
  `,
  styles: `
    .typewriter {
      display: inline-flex;
      align-items: baseline;
      gap: 0.15em;
    }
    .typewriter__text {
      background: var(--gradient-soft);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .typewriter__caret {
      display: inline-block;
      width: 0.08em;
      height: 0.95em;
      margin-left: 0.05em;
      border-radius: 1px;
      background: var(--color-brand);
      animation: caret-blink 1s steps(1) infinite;
      transform: translateY(0.08em);
    }
    @keyframes caret-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .typewriter__caret { animation: none; opacity: 1; }
    }
  `,
})
export class TypeWriter implements OnInit, OnDestroy {
  readonly words = input<string[]>([]);

  protected readonly text = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    const first = this.words()[0] ?? '';
    if (!isPlatformBrowser(this.platformId) || this.prefersReducedMotion()) {
      this.text.set(first);
      return;
    }
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private tick(): void {
    const word = this.words()[this.wordIndex] ?? '';

    if (this.deleting) {
      this.charIndex = Math.max(0, this.charIndex - 1);
      this.text.set(word.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words().length;
        this.timer = setTimeout(() => this.tick(), 350);
      } else {
        this.timer = setTimeout(() => this.tick(), 28);
      }
      return;
    }

    this.charIndex = Math.min(word.length, this.charIndex + 1);
    this.text.set(word.slice(0, this.charIndex));
    if (this.charIndex === word.length) {
      this.deleting = true;
      this.timer = setTimeout(() => this.tick(), 1900);
    } else {
      this.timer = setTimeout(() => this.tick(), 55 + Math.random() * 70);
    }
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
