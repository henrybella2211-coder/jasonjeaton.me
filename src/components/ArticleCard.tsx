import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles";

const tints = ["bg-peach", "bg-mint", "bg-butter"];

type ArticleCardProps = {
  article: Article;
  index?: number;
};

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const tint = tints[index % tints.length];

  return (
    <Link
      href={`/guides/${article.slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl ${tint} transition-transform hover:-translate-y-1`}
    >
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-plum">
            {article.category}
          </span>
          <span className="rounded-full bg-plum px-3 py-1 text-xs font-semibold text-cream">
            {article.readTime}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold leading-snug text-plum">
          {article.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-plum/80">{article.excerpt}</p>
        <p className="mt-auto text-xs font-medium text-plum/60">{article.lastUpdated}</p>
      </div>
    </Link>
  );
}
