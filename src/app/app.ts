import { Component, inject, signal, viewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './core';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from './data';
import { SocialLinks } from './shared/components/social-links/social-links';
import { CommandPalette } from './shared/components/command-palette/command-palette';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SocialLinks, CommandPalette],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  protected readonly site = SITE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly socialLinks = SOCIAL_LINKS.filter((l) => l.url.length > 0);
  protected readonly theme = this.themeService.theme;

  /** Mobile menu open state. */
  protected readonly menuOpen = signal(false);

  /** Command palette child (opened via header chip; ⌘K handled internally). */
  private readonly paletteRef = viewChild(CommandPalette);

  /** Called by the header chip to open the command palette. */
  protected openCommandPalette(): void {
    this.paletteRef()?.openPalette();
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onMenuKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  protected navigate(path: string): void {
    this.closeMenu();
    this.router.navigate([path]);
  }
}
