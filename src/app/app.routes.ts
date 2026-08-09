import { Routes } from '@angular/router';

/**
 * Route table. Every page is statically prerendered (see app.routes.server.ts)
 * and all non-home routes are lazy-loaded to keep the initial bundle small.
 * Page titles/descriptions are set by each page via SeoService.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
    title: 'Home',
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services').then((m) => m.Services),
    title: 'Services',
  },
  {
    path: 'expertise',
    loadComponent: () =>
      import('./features/expertise/expertise').then((m) => m.Expertise),
    title: 'Expertise',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects').then((m) => m.Projects),
    title: 'Projects',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about').then((m) => m.About),
    title: 'About',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found',
  },
];
