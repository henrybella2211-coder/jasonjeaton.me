import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

const switchCards = [
  {
    from: "Fruity, colourful, no-fuss disposables",
    fromDetail: "the Elf Bar and Lost Mary style of device most people started on",
    to: "A slim, one-button pod kit with prefilled flavour pods",
    toDetail:
      "Drop a pod in, no buttons to learn, and a similar mouth-to-lung draw to what you're used to.",
  },
  {
    from: "Clear-bodied, big-puff-count disposables",
    fromDetail: "SKE Crystal Bar style devices built to last a few days",
    to: "A pod kit with a bigger battery and spare pods in your bag",
    toDetail:
      "Look for 600mAh or more so you're not charging constantly, plus a couple of spare 2ml pods.",
  },
  {
    from: "Menthol or tobacco flavour disposables",
    fromDetail: "the ones you picked because the draw felt tight, like a cigarette",
    to: "An MTL pod kit with adjustable airflow",
    toDetail:
      "A closed or restricted airflow ring lets you dial in that tighter, cigarette-like pull.",
  },
];

const faqs = [
  {
    question: "Will a pod kit feel more complicated than my old disposable?",
    answer:
      "Most compact pod kits are built to be just as simple. Many have one button or none at all, and you swap a pod the same way you'd throw away a disposable. There's a short learning curve around charging and refilling, but it's not technical.",
  },
  {
    question: "Do I have to buy e-liquid separately now?",
    answer:
      "For a refillable pod kit, yes. Prefilled replacement pods are also widely available if you'd rather not handle a bottle at all. Nicotine e-liquid sold in the UK is capped at 20mg/ml, and bottles are sold in sizes up to 10ml under UK regulations.",
  },
  {
    question: "Is vaping still legal and regulated the same way?",
    answer:
      "Reusable, refillable vapes remain legal to buy and sell in the UK. You still need to be 18 or over, and devices sold here follow UK regulatory limits on nicotine strength and pod or tank size. Only single-use disposables were banned, from 1 June 2025.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-plum sm:text-5xl">
              Miss your disposable? Here&apos;s what to do next.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-plum/80">
              Single-use vapes were banned across the UK on 1 June 2025. If you were an
              Elf Bar, Lost Mary or Crystal Bar person, the good news is a small
              refillable pod kit does almost everything your old disposable did, and
              works out cheaper once you&apos;re set up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-primary-dark"
              >
                Browse the guides
              </Link>
              <Link
                href="/guides/disposable-vapes-banned-what-to-use-instead"
                className="rounded-full bg-peach px-7 py-3.5 text-base font-semibold text-plum transition-colors hover:bg-butter"
              >
                Read the ban explainer
              </Link>
            </div>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96">
            <Image
              src="/images/pod-kit-on-wooden-table.jpg"
              alt="A compact silver pod vape kit resting on a wooden table next to a pair of headphones"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Comparison block */}
      <section className="bg-peach/50 py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-heading text-3xl font-bold text-plum">
            3 popular disposables, and what to switch to
          </h2>
          <p className="mt-3 max-w-2xl text-plum/75">
            You don&apos;t need to match your old disposable exactly. These are the
            categories most former disposable users land on, based on what they liked
            about the device they used to buy.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {switchCards.map((card) => (
              <div key={card.from} className="flex flex-col gap-4 rounded-2xl bg-cream p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-plum/50">
                    You used to buy
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-plum">
                    {card.from}
                  </p>
                  <p className="mt-1 text-sm text-plum/70">{card.fromDetail}</p>
                </div>
                <div className="h-px w-full bg-plum/10" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Switch to
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-plum">
                    {card.to}
                  </p>
                  <p className="mt-1 text-sm text-plum/70">{card.toDetail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-plum">Latest guides</h2>
            <p className="mt-2 max-w-xl text-plum/75">
              Everything we&apos;ve written so far to help you pick a replacement and
              use it comfortably.
            </p>
          </div>
          <Link
            href="/guides"
            className="rounded-full bg-plum px-5 py-2.5 text-sm font-semibold text-cream hover:bg-plum-light"
          >
            See all guides
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-mint/60 py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-heading text-3xl font-bold text-plum">
            A few quick reassurances
          </h2>
          <div className="mt-8 flex flex-col gap-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-plum">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-plum/80">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-plum/70">
            Still not sure where to start?{" "}
            <Link href="/guides" className="font-semibold text-primary underline underline-offset-2">
              Read our full guides
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-primary underline underline-offset-2">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
