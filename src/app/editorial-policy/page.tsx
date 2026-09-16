import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How Switch Kit researches, writes and updates its guides.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Editorial policy", href: "/editorial-policy" }]}
      />
      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Editorial Policy</h1>
      <p className="mt-3 text-sm font-medium text-plum/60">Last updated 8 September 2026</p>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          This page explains how content on {siteConfig.name} is researched, written
          and kept up to date, so you know what to expect from anything you read here.
        </p>

        <h2>Who writes our content</h2>
        <p>
          Guides are written and edited by our UK-based editorial team. We don&apos;t
          attribute individual articles to a named freelance writer or invent author
          personas, this is a genuinely collective effort, and we&apos;d rather be
          upfront about that than fabricate individual bylines or qualifications.
        </p>

        <h2>How we research</h2>
        <p>
          For factual claims, particularly anything involving law or regulation such
          as the UK disposable vape ban, age-of-sale rules, or nicotine strength
          limits, we base our wording on official UK sources: GOV.UK, the Medicines
          and Healthcare products Regulatory Agency (MHRA), the NHS, and, where
          relevant, Trading Standards guidance. For general product specifications
          such as typical pod capacities or battery sizes, we draw on publicly
          available manufacturer information and typical UK retail listings.
        </p>
        <p>
          We do not claim to have personally tested products we describe, and we
          don&apos;t publish star ratings, review scores or invented statistics. Where
          we give price ranges, they reflect typical UK high-street or online pricing
          at the time of writing, described as ranges rather than suspiciously precise
          figures.
        </p>

        <h2>No paid placement</h2>
        <p>
          We do not accept payment, free products or any other incentive in exchange
          for favourable coverage of a specific brand or product. We don&apos;t
          currently run advertising on this site at all.
        </p>

        <h2>Keeping content current</h2>
        <p>
          Vaping regulation in the UK has changed meaningfully in recent years, so
          every guide displays a &quot;last updated&quot; date. We review articles
          periodically and whenever we&apos;re made aware of a relevant regulatory
          change, and we update the date whenever we make a substantive edit, not for
          minor wording tweaks.
        </p>

        <h2>Corrections</h2>
        <p>
          If you spot something inaccurate or out of date, please tell us using our{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>
          . We&apos;ll review it and correct genuine errors promptly. For anything
          involving a regulatory fact, we&apos;ll check it against the relevant
          official source before amending the article.
        </p>
      </div>
    </div>
  );
}
