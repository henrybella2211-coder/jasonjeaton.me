import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "All of Switch Kit's guides on moving from disposable vapes to a reusable pod kit: what the UK ban means, how to pick a kit, and what it costs.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }]} />

      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Guides</h1>
      <p className="mt-4 max-w-2xl text-lg text-plum/75">
        Practical, plain-English guides for anyone switching from a disposable to a
        reusable pod kit. No jargon, no ranked &quot;best of&quot; lists, just what
        actually matters when you&apos;re choosing and using a replacement.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </div>
  );
}
