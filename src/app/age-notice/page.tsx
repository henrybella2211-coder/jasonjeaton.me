import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Age Notice",
  description: "Switch Kit is intended for adults aged 18 and over.",
  alternates: { canonical: "/age-notice" },
};

export default function AgeNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Age notice", href: "/age-notice" }]} />
      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Age Notice</h1>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          {siteConfig.name} is intended for adults aged 18 and over. This site is
          written for people who already smoke or vape and want factual, practical
          information about reusable vaping products, or for adults who are simply
          researching the subject.
        </p>
        <p>
          Nothing on this website is intended to encourage anyone under the age of 18,
          or anyone who has never smoked or vaped, to start vaping. Vaping products are
          age-restricted in the UK, and it is against the law for a retailer to sell
          vaping or tobacco products to anyone under 18.
        </p>
        <p>
          Retailers are required to verify age before selling vaping products. Many
          shops apply a &quot;Challenge 25&quot; policy, asking for ID from anyone who
          looks under 25, as a practical way of enforcing the legal age limit of 18.
          Challenge 25 itself is common retailer policy, not a separate law.
        </p>
        <p>
          Vaping is regulated in the UK but is not risk-free. According to the NHS,
          vaping carries far fewer risks than smoking for adults who already smoke, and
          public health bodies including the NHS and OHID (the Office for Health
          Improvement and Disparities) position it as a tool that can support quitting
          smoking. It is not intended for non-smokers, and particularly not for
          under-18s, whether or not they currently vape.
        </p>
        <p>
          If you are under 18, please leave this site. For general information about
          smoking, vaping and quitting aimed at all ages, the NHS website is a good
          starting point.
        </p>
        <p>
          You can read more about how we handle content generally in our{" "}
          <Link href="/editorial-policy" className="text-primary underline underline-offset-2">
            editorial policy
          </Link>{" "}
          and our{" "}
          <Link href="/terms" className="text-primary underline underline-offset-2">
            terms &amp; disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
