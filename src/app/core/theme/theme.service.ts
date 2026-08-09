import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';
const DATA_ATTR = 'data-theme';

/**
 * Manages dark/light theming.
 * The active theme is stored on the <html> `data-theme` attribute (default:
 * dark). Light mode is applied when explicitly chosen or matched from the
 * system preference. An inline critical script in index.html applies the
 * stored preference before first paint to avoid a flash of the wrong theme.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly themeSignal = signal<Theme>(this.resolveInitial());

  readonly theme = this.themeSignal.asReadonly();

  /** Resolve the initial theme from storage, then system preference. */
  private resolveInitial(): Theme {
    const root = this.document.documentElement;
    const stored = root.getAttribute(DATA_ATTR) as Theme | null;
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return this.prefersDark() ? 'dark' : 'light';
  }

  toggle(): void {
    this.set(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  set(next: Theme): void {
    const root = this.document.documentElement;
    root.setAttribute(DATA_ATTR, next);
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable (private mode); theme still applies.
    }
    this.themeSignal.set(next);
  }

  private prefersDark(): boolean {
    const media = this.document.defaultView?.matchMedia?.(
      '(prefers-color-scheme: dark)',
    );
    return media?.matches ?? true;
  }
}
