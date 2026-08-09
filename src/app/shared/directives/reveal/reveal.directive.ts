import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

/**
 * Scroll-reveal animation. SSR-safe: on the server (and for users with
 * `prefers-reduced-motion`) content is rendered fully visible; in the
 * browser the element fades/slides in when it enters the viewport.
 *
 * Usage: `<section appReveal [revealDelay]="120">`
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  /** Stagger delay in ms applied once the element enters the viewport. */
  @Input() revealDelay = 0;

  ngOnInit(): void {
    if (
      !isPlatformBrowser(this.platformId) ||
      this.prefersReducedMotion()
    ) {
      this.renderer.addClass(this.el.nativeElement, 'reveal--visible');
      return;
    }

    this.renderer.addClass(this.el.nativeElement, 'reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (this.revealDelay > 0) {
              setTimeout(() => this.show(), this.revealDelay);
            } else {
              this.show();
            }
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal--visible');
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
