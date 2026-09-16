export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  lastUpdatedISO: string;
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    slug: "disposable-vapes-banned-what-to-use-instead",
    title: "Disposable vapes are banned. Here's what to use instead",
    excerpt:
      "A quick, no-jargon recap of the disposable vape ban and the straightforward reusable options that replicate the bit you actually liked about disposables.",
    category: "Getting started",
    readTime: "7 min read",
    lastUpdated: "Last updated 10 September 2026",
    lastUpdatedISO: "2026-09-10",
    image: "/images/collection-of-pod-devices.jpg",
    imageAlt:
      "A row of small grey reusable pod vape devices lined up together on a flat surface",
  },
  {
    slug: "refillable-pod-kits-that-feel-like-a-disposable",
    title: "Refillable pod kits that feel like a disposable",
    excerpt:
      "What actually matters when you're choosing a compact pod kit: pod capacity, coil resistance, battery life, and why none of it needs to feel technical.",
    category: "Choosing a kit",
    readTime: "8 min read",
    lastUpdated: "Last updated 12 September 2026",
    lastUpdatedISO: "2026-09-12",
    image: "/images/pod-kit-with-eliquid-bottle.jpg",
    imageAlt:
      "A small refillable pod vape kit standing next to a 10ml e-liquid bottle on a wooden surface",
  },
  {
    slug: "how-much-can-you-save-switching-to-a-pod-kit",
    title: "How much money can switching from disposables to a pod kit actually save?",
    excerpt:
      "A plain-English way to work out your own numbers: what disposables were costing you, what a pod kit costs upfront, and what it costs to keep running.",
    category: "Costs",
    readTime: "7 min read",
    lastUpdated: "Last updated 15 September 2026",
    lastUpdatedISO: "2026-09-15",
    image: "/images/piggy-bank-savings-coins.jpg",
    imageAlt:
      "A white ceramic piggy bank surrounded by scattered pound coins on a table",
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
