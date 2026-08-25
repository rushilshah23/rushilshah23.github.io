import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FAQS, PROJECTS, SECTIONS, SERVICES, SITE } from '../../data';
import { Faq, PageMeta } from '../../models';

export interface JsonLdNode {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

const OG_IMAGE = '/assets/og-image.png';

/**
 * Central SEO/AEO manager.
 * - Sets per-page title, meta description, canonical and Open Graph tags.
 * - Injects JSON-LD structured data (Person, WebSite, ProfessionalService,
 *   FAQPage, BreadcrumbList) for rich search + answer-engine results.
 * Works in both SSR (SSG) and client contexts via injected DOCUMENT.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private injectedIds = new Set<string>();

  /** Apply page metadata + canonical + Open Graph tags. */
  applyPageMeta(metaData: PageMeta): void {
    this.title.setTitle(metaData.title);
    this.meta.updateTag({ name: 'description', content: metaData.description });
    this.setCanonical(metaData.path);
    this.applyOpenGraph(metaData);
  }

  /** Open Graph + Twitter card tags for social sharing. */
  private applyOpenGraph(metaData: PageMeta): void {
    const url = this.canonicalUrl(metaData.path);
    this.meta.updateTag({ property: 'og:title', content: metaData.title });
    this.meta.updateTag({ property: 'og:description', content: metaData.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ property: 'og:image', content: `${SITE.url}${OG_IMAGE}` });
    this.meta.updateTag({ property: 'og:site_name', content: SITE.name });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: metaData.title });
    this.meta.updateTag({ name: 'twitter:description', content: metaData.description });
    this.meta.updateTag({ name: 'twitter:image', content: `${SITE.url}${OG_IMAGE}` });
  }

  /**
   * Build the absolute canonical URL for a route path. GitHub Pages serves
   * directory routes at `/<path>/` (a 301 from the bare path), so the
   * canonical form carries the trailing slash — matching the sitemap and
   * the actually-served URL.
   */
  private canonicalUrl(path: string): string {
    const normalized =
      path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
    return `${SITE.url}${normalized}`;
  }

  private setCanonical(path: string): void {
    const canonical =
      this.document.querySelector('link[rel="canonical"]') ??
      this.document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', this.canonicalUrl(path));
    if (!canonical.parentNode) {
      this.document.head.appendChild(canonical);
    }
  }

  /**
   * Inject a JSON-LD script block. Each node is injected once by id.
   * Runs during prerender, so structured data is baked into static HTML.
   */
  injectJsonLd(id: string, node: JsonLdNode): void {
    if (this.injectedIds.has(id)) {
      return;
    }
    this.injectedIds.add(id);
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(node);
    this.document.head.appendChild(script);
  }

  /** Person structured data describing the site owner. */
  personSchema(): JsonLdNode {
    const sameAs = Object.values(SITE.social).filter((url) => url.length > 0);
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE.name,
      jobTitle: SITE.title,
      description: SITE.tagline,
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      image: `${SITE.url}/assets/profile.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'Full-Stack Development',
        'Platform Engineering',
        'DevOps',
        'Cloud Architecture',
        'Fintech',
        'Consumer Lending',
        'Banking',
        'Insurance',
        'Energy',
        'Microservices',
        'Data Engineering',
        'GenAI',
        'LangChain',
        'AI Agents',
      ],
      sameAs,
    };
  }

  /** WebSite authority block linking to the Person. */
  websiteSchema(): JsonLdNode {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: `${SITE.name} — ${SITE.title}`,
      url: SITE.url,
      description: SITE.tagline,
      author: { '@type': 'Person', name: SITE.name },
      inLanguage: 'en',
    };
  }

  /** ProfessionalService schema describing the freelance offering. */
  professionalServiceSchema(): JsonLdNode {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${SITE.name} — ${SITE.title}`,
      url: SITE.url,
      email: `mailto:${SITE.email}`,
      areaServed: 'Worldwide',
      priceRange: '$$',
      founder: { '@type': 'Person', name: SITE.name },
      makesOffer: SERVICES.map((service) => ({
        '@type': 'Offer',
        name: service.title,
        description: service.summary,
      })),
    };
  }

  /**
   * SoftwareApplication (Code) schema for the portfolio projects — gives
   * answer engines concrete artifacts with tech stacks and links.
   */
  projectsSchema(): JsonLdNode {
    const projects = PROJECTS.map((project) => ({
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.summary,
      applicationCategory: 'DeveloperApplication',
      datePublished: project.year,
      keywords: project.tags.join(', '),
      author: { '@type': 'Person', name: SITE.name },
      url: project.projectUrl ?? this.canonicalUrl('/projects'),
      ...(project.codeUrl ? { codeRepository: project.codeUrl } : {}),
    }));
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Projects — ${SITE.name}`,
      url: this.canonicalUrl('/projects'),
      hasPart: projects,
    };
  }

  /** FAQPage schema for answer-engine optimization (AEO). */
  faqSchema(faqs: Faq[] = FAQS): JsonLdNode {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    };
  }

  /**
   * BreadcrumbList for a route. `items` are [{ label, path }] ordered
   * home-first; the current page is appended automatically from SECTIONS.
   */
  breadcrumbSchema(items: { label: string; path: string }[] = []): JsonLdNode {
    const crumbs = [{ label: 'Home', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: this.canonicalUrl(item.path),
    }));
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs,
    };
  }

  /** Convenience: apply a section's meta + breadcrumb in one call. */
  applySection(sectionKey: string): void {
    const section = SECTIONS[sectionKey];
    if (!section) {
      return;
    }
    this.applyPageMeta(section.meta);
    const crumbs = [
      { label: 'Home', path: '/' },
      { label: section.nav.label, path: section.nav.path },
    ];
    this.injectJsonLd(`json-ld-breadcrumb-${sectionKey}`, this.breadcrumbSchema(crumbs.slice(1)));
  }
}
