import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { ThemeService } from '../../../core';
import { NAV_LINKS, PROJECTS, SITE } from '../../../data';
import { CommandGroup, PaletteCommand } from '../../../models';

/** Display order of command groups in the palette. */
const GROUP_ORDER: readonly CommandGroup[] = ['navigate', 'projects', 'actions'];

const GROUP_LABELS: Readonly<Record<CommandGroup, string>> = {
  navigate: 'Navigate',
  projects: 'Projects',
  actions: 'Actions',
};

/**
 * CommandPalette — the site-wide "order entry" overlay (⌘K / Ctrl+K / `/`).
 *
 * A trading-terminal-flavoured command palette: type to filter commands,
 * ↑/↓ moves the selection, Enter runs it. Groups: Navigate (routes),
 * Projects (deep links onto the projects page), Actions (theme toggle,
 * resume PDF, copy email, social profiles).
 *
 * Identity: mono type + ticker chips keep the market-terminal language;
 * the search line renders as a shell prompt (`rushil@mumbai:~$`).
 *
 * Accessibility: role=dialog aria-modal, focus trapped while open, Esc
 * closes and restores focus to the invoker, combobox/listbox selection
 * pattern, body scroll locked while open. SSR/prerender safe.
 */
@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.html',
  styleUrl: './command-palette.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPalette {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  /** Open state of the overlay. */
  protected readonly open = signal(false);
  /** Current query typed into the prompt line. */
  protected readonly query = signal('');
  /** Flat index into `filtered()` of the active row. */
  protected readonly activeIndex = signal(0);
  /** Id of the last inline-run action, for in-palette feedback. */
  protected readonly lastRunId = signal<string | null>(null);

  private readonly inputRef =
    viewChild<ElementRef<HTMLInputElement>>('paletteInput');
  private readonly dialogRef = viewChild<ElementRef<HTMLElement>>('dialogEl');

  private restoreFocusTo: HTMLElement | null = null;

  /** All registered commands, in display order. */
  private readonly commands: PaletteCommand[] = [];

  /** Query-matched commands (every whitespace-separated term must match). */
  protected readonly filtered = signal<PaletteCommand[]>([]);

  /** Ordered non-empty groups with their matched commands + flat offset. */
  protected readonly grouped = signal<
    { label: string; items: PaletteCommand[]; offset: number }[]
  >([]);

  constructor() {
    this.registerCommands();
    this.recomputeFiltered();

    // Keep aria-activedescendant in sync with the roving index.
    effect(() => {
      const cmd = this.filtered()[this.activeIndex()];
      this.activeDescendant.set(cmd ? `palette-opt-${cmd.id}` : null);
    });

    if (isPlatformBrowser(this.platformId)) {
      // Close whenever a navigation completes (Navigate/Project commands).
      this.router.events
        .pipe(
          filter((e): e is NavigationEnd => e instanceof NavigationEnd),
          takeUntilDestroyed(),
        )
        .subscribe(() => {
          if (this.open()) {
            this.close();
          }
        });
    }
  }

  /** Id of the active option element, for `aria-activedescendant`. */
  protected readonly activeDescendant = signal<string | null>(null);

  /* ------------------------------------------------------------------ */
  /* Commands                                                            */
  /* ------------------------------------------------------------------ */

  private registerCommands(): void {
    const navigate = (path: string) => () => {
      void this.router.navigate([path]);
    };
    const openExternal = (url: string) => () => {
      this.document.defaultView?.open(url, '_blank', 'noopener');
    };

    this.commands.push(
      ...NAV_LINKS.map(
        (link): PaletteCommand => ({
          id: `nav-${link.path.replace(/\//g, '') || 'home'}`,
          group: 'navigate',
          ticker: 'NAV',
          label: link.label,
          hint: link.path === '/' ? '/' : link.path,
          keywords: 'page section route go',
          run: navigate(link.path),
        }),
      ),
      ...PROJECTS.map(
        (p): PaletteCommand => ({
          id: `project-${p.id}`,
          group: 'projects',
          ticker: 'PRJ',
          label: p.title,
          hint: p.year,
          keywords: [p.year, ...p.tags].join(' '),
          run: () => {
            void this.router.navigate(['/projects'], { fragment: p.id });
          },
        }),
      ),
      {
        id: 'action-theme',
        group: 'actions',
        ticker: 'SYS',
        label: 'Toggle light / dark theme',
        hint: '◐',
        keywords: 'dark light mode appearance system',
        run: () => this.themeService.toggle(),
      },
      {
        id: 'action-resume',
        group: 'actions',
        ticker: 'PDF',
        label: 'Download resume (PDF)',
        hint: '↓',
        keywords: 'cv download resume pdf',
        run: () => {
          window.open(SITE.resumeUrl, '_blank', 'noopener');
        },
      },
      {
        id: 'action-copy-email',
        group: 'actions',
        ticker: 'CPY',
        label: 'Copy email address',
        hint: 'copy',
        keywords: 'email contact mail clipboard copy',
        keepOpen: true,
        run: () => {
          void this.copyEmail();
        },
      },
      {
        id: 'action-github',
        group: 'actions',
        ticker: 'EXT',
        label: 'Open GitHub profile ↗',
        hint: '↗',
        keywords: 'github code repositories social',
        run: openExternal(SITE.social.github),
      },
      {
        id: 'action-linkedin',
        group: 'actions',
        ticker: 'EXT',
        label: 'Open LinkedIn profile ↗',
        hint: '↗',
        keywords: 'linkedin career social',
        run: openExternal(SITE.social.linkedin),
      },
      {
        id: 'action-x',
        group: 'actions',
        ticker: 'EXT',
        label: 'Open X (Twitter) profile ↗',
        hint: '↗',
        keywords: 'x twitter social',
        run: openExternal(SITE.social.x),
      },
    );
  }

  /** Copy the site email; falls back to execCommand, then to showing it. */
  private async copyEmail(): Promise<void> {
    let copied = false;
    try {
      await navigator.clipboard.writeText(SITE.email);
      copied = true;
    } catch {
      // Clipboard API unavailable (permissions/insecure context): fallback.
      const area = this.document.createElement('textarea');
      area.value = SITE.email;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      this.document.body.appendChild(area);
      area.select();
      try {
        copied = this.document.execCommand('copy');
      } catch {
        copied = false;
      }
      area.remove();
    }
    if (copied) {
      this.lastRunId.set('action-copy-email');
    }
    // On failure the palette simply stays open; the email is also visible
    // in the footer/contact page, so no destructive fallback is needed.
  }

  /* ------------------------------------------------------------------ */
  /* Filtering                                                           */
  /* ------------------------------------------------------------------ */

  private recomputeFiltered(): void {
    const q = this.query().trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    const matched = this.commands.filter((c) =>
      terms.every((t) =>
        `${c.label} ${c.ticker} ${c.keywords ?? ''}`.toLowerCase().includes(t),
      ),
    );

    let offset = 0;
    const groups = GROUP_ORDER.filter((g) => matched.some((c) => c.group === g)).map(
      (g) => {
        const items = matched.filter((c) => c.group === g);
        const entry = { label: GROUP_LABELS[g], items, offset };
        offset += items.length;
        return entry;
      },
    );

    this.filtered.set(matched);
    this.grouped.set(groups);
    if (this.activeIndex() >= Math.max(matched.length, 1)) {
      this.activeIndex.set(Math.max(matched.length - 1, 0));
    }
  }

  /* ------------------------------------------------------------------ */
  /* Global keyboard handling                                            */
  /* ------------------------------------------------------------------ */

  /**
   * Document-level keydown:
   * - closed: ⌘K / Ctrl+K / `/` opens; Escape does nothing
   * - open: Esc closes · ↑↓ cycle · Home/End jump · Enter runs · Tab trapped
   */
  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.open()) {
      const key = event.key.toLowerCase();
      const combo = (event.metaKey || event.ctrlKey) && key === 'k';
      const slash =
        key === '/' &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !CommandPalette.isTypingTarget(event.target);
      if (combo || slash) {
        event.preventDefault();
        this.openPalette();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        const count = this.filtered().length;
        if (count > 0) {
          const delta = event.key === 'ArrowDown' ? 1 : -1;
          this.activeIndex.update((i) => (i + delta + count) % count);
          this.scrollActiveRowIntoView();
        }
        break;
      }
      case 'Home':
        event.preventDefault();
        this.activeIndex.set(0);
        this.scrollActiveRowIntoView();
        break;
      case 'End': {
        event.preventDefault();
        const count = this.filtered().length;
        this.activeIndex.set(count > 0 ? count - 1 : 0);
        this.scrollActiveRowIntoView();
        break;
      }
      case 'Enter':
        event.preventDefault();
        this.runActive();
        break;
      case 'Tab':
        this.trapTab(event);
        break;
      default:
        break;
    }
  }

  /** True when the global shortcut must NOT fire (typing in a field). */
  private static isTypingTarget(target: EventTarget | null): boolean {
    const el = target as HTMLElement | null;
    if (!el?.tagName) {
      return false;
    }
    return (
      el.tagName === 'INPUT' ||
      el.tagName === 'TEXTAREA' ||
      el.tagName === 'SELECT' ||
      el.isContentEditable === true
    );
  }

  /** Keeps the active option visible inside the scrolling list. */
  private scrollActiveRowIntoView(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    setTimeout(() => {
      const dialog = this.dialogRef()?.nativeElement;
      dialog
        ?.querySelector(`#palette-opt-${this.filtered()[this.activeIndex()]?.id}`)
        ?.scrollIntoView({ block: 'nearest' });
    }, 0);
  }

  /* ------------------------------------------------------------------ */
  /* Open / close                                                        */
  /* ------------------------------------------------------------------ */

  /** Opens the palette (also called from the header ⌘K chip). */
  openPalette(): void {
    if (this.open()) {
      return;
    }
    this.restoreFocusTo =
      this.document.activeElement instanceof HTMLElement
        ? this.document.activeElement
        : null;
    this.query.set('');
    this.lastRunId.set(null);
    this.activeIndex.set(0);
    this.recomputeFiltered();
    this.open.set(true);
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.add('palette-open');
      setTimeout(() => this.inputRef()?.nativeElement.focus(), 0);
    }
  }

  protected close(): void {
    if (!this.open()) {
      return;
    }
    this.open.set(false);
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.classList.remove('palette-open');
    }
    this.restoreFocusTo?.focus();
    this.restoreFocusTo = null;
  }

  /* ------------------------------------------------------------------ */
  /* Template handlers                                                   */
  /* ------------------------------------------------------------------ */

  /** Executes a command and applies its close / keep-open policy. */
  protected run(cmd: PaletteCommand): void {
    cmd.run();
    if (cmd.keepOpen) {
      return; // Inline feedback path (copy email) — palette stays open.
    }
    this.close();
  }

  /** Runs the command at the active index (Enter). */
  protected runActive(): void {
    const cmd = this.filtered()[this.activeIndex()];
    if (cmd) {
      this.run(cmd);
    }
  }

  /** Pointer hover moves the active row. */
  protected setActive(index: number): void {
    this.activeIndex.set(index);
  }

  /** True when `cmd` is the active row (styling + ARIA selected state). */
  protected isActive(cmd: PaletteCommand): boolean {
    return this.filtered()[this.activeIndex()] === cmd;
  }

  /** Flat index of a command across all groups (roving active row). */
  protected globalIndex(cmd: PaletteCommand): number {
    return this.commands.indexOf(cmd);
  }

  /** Clicks directly on the backdrop close the palette. */
  protected onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  /** Query input changed. */
  protected onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.activeIndex.set(0);
    this.recomputeFiltered();
  }

  /* ------------------------------------------------------------------ */
  /* Focus trap                                                          */
  /* ------------------------------------------------------------------ */

  private trapTab(event: KeyboardEvent): void {
    const root = this.dialogRef()?.nativeElement;
    if (!root) {
      return;
    }
    const focusables = Array.from(
      root.querySelectorAll<HTMLElement>(
        'input, button, [href], [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => !el.hasAttribute('disabled'));
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = this.document.activeElement;
    if (event.shiftKey && (active === first || active === root)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
