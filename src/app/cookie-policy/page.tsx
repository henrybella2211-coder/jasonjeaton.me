import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies Switch Kit actually uses, stated plainly.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Cookie policy", href: "/cookie-policy" }]}
      />
      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Cookie Policy</h1>
      <p className="mt-3 text-sm font-medium text-plum/60">Last updated 8 September 2026</p>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          We&apos;d rather be straightforward about this than pad the page out. Here is
          exactly what {siteConfig.name} does and doesn&apos;t do with cookies.
        </p>

        <h2>What we currently use</h2>
        <p>
          This website does not currently use tracking, analytics or advertising
          cookies of any kind. We haven&apos;t added a web analytics tool, an
          advertising pixel, or any third-party tracking script. Because of that,
          you won&apos;t see a cookie consent banner on this site, we simply don&apos;t
          have anything to ask consent for at the moment.
        </p>
        <p>
          The site may use only essential, strictly necessary technical storage
          required for basic functionality (for example, remembering that
          you&apos;ve opened the mobile navigation menu during your visit). Where
          used, this kind of storage doesn&apos;t identify you personally and isn&apos;t
          used for tracking or advertising.
        </p>

        <h2>If this changes</h2>
        <p>
          If we ever add privacy-friendly analytics, or any other cookie-setting
          technology, we&apos;ll update this page to describe exactly what&apos;s been
          added, why, and add a proper consent mechanism where the law requires it.
          We won&apos;t retroactively claim a consent banner exists if it doesn&apos;t.
        </p>

        <h2>Cookies set by other sites</h2>
        <p>
          Where our guides link out to official sources such as GOV.UK, the MHRA or the
          NHS, or to manufacturer websites, those sites have their own cookie and
          privacy practices that we don&apos;t control. We&apos;d recommend checking
          their own cookie policy if you&apos;re concerned.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any question about this policy, see our{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>{" "}
          for how to reach us. You can also read our{" "}
          <Link href="/privacy-policy" className="text-primary underline underline-offset-2">
            privacy policy
          </Link>{" "}
          for the wider picture of what data we hold.
        </p>
      </div>
    </div>
  );
}
