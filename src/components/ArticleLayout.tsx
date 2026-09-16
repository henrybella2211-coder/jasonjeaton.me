import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import type { Article } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

type ArticleLayoutProps = {
  article: Article;
  children: ReactNode;
};

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.lastUpdatedISO,
    dateModified: article.lastUpdatedISO,
    author: {
      "@type": "Organization",
      name: `${siteConfig.name} editorial team`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <JsonLd data={schema} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: article.title, href: `/guides/${article.slug}` },
        ]}
      />

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-peach px-3 py-1 text-xs font-semibold text-plum">
          {article.category}
        </span>
        <span className="rounded-full bg-plum px-3 py-1 text-xs font-semibold text-cream">
          {article.readTime}
        </span>
      </div>

      <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-3 text-sm font-medium text-plum/60">{article.lastUpdated}</p>

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-2xl sm:h-96">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">{children}</div>
    </article>
  );
}
