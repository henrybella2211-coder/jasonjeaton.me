import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description: "Terms of use and editorial disclaimer for the Switch Kit website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms & disclaimer", href: "/terms" }]} />
      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Terms &amp; Disclaimer</h1>
      <p className="mt-3 text-sm font-medium text-plum/60">Last updated 8 September 2026</p>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          These terms cover your use of {siteConfig.name} ({siteConfig.domain}). By
          using this website, you&apos;re agreeing to them. If anything here is
          unclear, our{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>{" "}
          is the quickest way to ask.
        </p>

        <h2>This is an information website</h2>
        <p>
          {siteConfig.name} is an independent editorial resource. We are not a
          retailer, we don&apos;t sell vaping products, and nothing on this site is
          professional medical, legal or financial advice. Content is provided for
          general information only.
        </p>

        <h2>18+ and informational use only</h2>
        <p>
          This site is written for adults aged 18 and over who already smoke or vape.
          It&apos;s not intended to encourage anyone under 18, or anyone who
          doesn&apos;t already smoke or vape, to start. See our{" "}
          <Link href="/age-notice" className="text-primary underline underline-offset-2">
            age notice
          </Link>{" "}
          for the full statement.
        </p>

        <h2>No liability for third-party products</h2>
        <p>
          Where we describe categories of device, specifications or typical pricing,
          this reflects general research at the time of writing and is not a claim
          about any specific manufacturer&apos;s product, nor a guarantee of
          performance, safety or price. We don&apos;t accept liability for decisions
          you make based on general guidance here, and we&apos;d always recommend
          checking current specifications and pricing directly with a retailer or
          manufacturer before buying.
        </p>

        <h2>External links</h2>
        <p>
          We sometimes link to official UK sources (such as GOV.UK, the MHRA or the
          NHS) or, occasionally, to manufacturer websites when naming a specific
          product model is genuinely useful. We don&apos;t control these external
          sites and aren&apos;t responsible for their content, availability or
          accuracy. Links are provided for convenience, not as an endorsement.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The text, design and layout of this website belong to {siteConfig.name}
          unless stated otherwise. You&apos;re welcome to link to our pages, but
          please don&apos;t republish our articles wholesale without asking first.
          Product names, logos and trademarks mentioned on this site belong to their
          respective owners.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms occasionally to keep them accurate. The date at
          the top of this page shows when it was last revised.
        </p>
      </div>
    </div>
  );
}
