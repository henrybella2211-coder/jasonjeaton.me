export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdated: string; // human readable
  lastUpdatedISO: string; // for schema
  image: {
    src: string;
    alt: string;
  };
};

export const articles: Article[] = [
  {
    slug: "disposable-vapes-banned-what-to-use-instead",
    title: "Disposable vapes are banned. Here's what to use instead",
    excerpt:
      "The quick, no-jargon version of what changed on 1 June 2025 and why a small refillable pod kit is the closest thing to your old disposable.",
    category: "The ban, explained",
    readTime: "6 min read",
    lastUpdated: "Last updated 8 September 2026",
    lastUpdatedISO: "2026-09-08",
    image: {
      src: "/images/vape-shop-display-case.jpg",
      alt: "A glass display case in a vape shop showing a row of compact pod mod devices in different colours",
    },
  },
  {
    slug: "refillable-pod-kits-that-feel-like-a-disposable",
    title: "Refillable pod kits that feel like a disposable",
    excerpt:
      "What actually matters when you're comparing compact pod systems: pod capacity, coil resistance, battery size, and how the running costs stack up.",
    category: "Kit guide",
    readTime: "8 min read",
    lastUpdated: "Last updated 12 September 2026",
    lastUpdatedISO: "2026-09-12",
    image: {
      src: "/images/collection-of-pod-devices.jpg",
      alt: "A row of different vape pens, pod devices and e-liquid cartridges lined up in a testing rack",
    },
  },
  {
    slug: "how-much-you-can-save-switching-from-disposables",
    title: "How much money can switching from disposables to a pod kit actually save?",
    excerpt:
      "A plain-English way to work out your own numbers, with a worked example comparing typical disposable spending to a pod kit and e-liquid.",
    category: "Costs & savings",
    readTime: "7 min read",
    lastUpdated: "Last updated 15 September 2026",
    lastUpdatedISO: "2026-09-15",
    image: {
      src: "/images/british-coins-savings.jpg",
      alt: "A small pile of British pound and pence coins spread out on a pale wooden surface",
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
