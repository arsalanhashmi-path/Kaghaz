export type Language = 'en' | 'ur';

export interface ContentSection {
  title: string;
  subtitle?: string;
  body?: string;
  cta?: string;
  items?: ContentItem[];
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
}

export interface TranslationDictionary {
  nav: {
    features: string;
    documents: string;
    privacy: string;
    stories: string;
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statusTag: string;
  };
  agitation: {
    header: string;
    scenarios: string[];
    pivot: string;
  };
  pillars: {
    header: string;
    items: ContentItem[];
  };
  docs: {
    header: string;
    items: ContentItem[];
    hoverText: string;
  };
  privacy: {
    header: string;
    body: string;
    points: string[];
  };
  social: {
    header: string;
    scenario: {
      without: string;
      with: string;
    }
  };
  footer: {
    cta: string;
    sub: string;
    links: string[];
  }
}