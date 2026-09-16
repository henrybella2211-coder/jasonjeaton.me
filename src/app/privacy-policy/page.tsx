import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Switch Kit handles personal data, in plain English.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy policy", href: "/privacy-policy" }]}
      />
      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Privacy Policy</h1>
      <p className="mt-3 text-sm font-medium text-plum/60">Last updated 8 September 2026</p>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          This page explains what personal data {siteConfig.name} collects, why, and
          what your rights are. We&apos;ve tried to write it in plain English rather
          than dense legal wording, since this is meant to actually inform you.
        </p>

        <h2>Who we are</h2>
        <p>
          {siteConfig.name} ({siteConfig.domain}) is an independent UK editorial
          website. We&apos;re not a retailer and we don&apos;t sell any products
          directly. This policy covers the website itself, not any third-party site
          you might click through to.
        </p>

        <h2>What data we collect</h2>
        <p>This site collects very little personal data. Specifically:</p>
        <ul>
          <li>
            <strong>Contact by email.</strong> Our contact page links directly to a
            mailto address rather than a form hosted on this site. If you email us,
            we&apos;ll hold that email and your address for as long as needed to
            respond and keep a reasonable record of the conversation, in line with our
            email provider&apos;s own retention settings.
          </li>
          <li>
            <strong>Basic server logs.</strong> Like most websites, our hosting
            provider may log standard technical information (such as IP address and
            browser type) for security and reliability purposes. We don&apos;t use
            this to identify individual visitors for marketing purposes.
          </li>
        </ul>
        <p>
          We do not currently run any analytics, advertising or tracking scripts on
          this site. If that changes in future, we&apos;ll update this page and our{" "}
          <Link href="/cookie-policy" className="text-primary underline underline-offset-2">
            cookie policy
          </Link>{" "}
          to reflect it honestly.
        </p>

        <h2>How we use your data</h2>
        <p>
          Any information you send us by email is used solely to respond to you and,
          where relevant, to improve the accuracy of our guides. We don&apos;t sell,
          rent or share your personal data with third parties for marketing.
        </p>

        <h2>Legal basis and your rights</h2>
        <p>
          Under UK GDPR and the Data Protection Act 2018, you have rights over your
          personal data, including the right to ask what we hold about you, to ask us
          to correct or delete it, and to object to how it&apos;s used. Because we hold
          so little data in the first place, most requests are straightforward for us
          to action quickly.
        </p>

        <h2>How long we keep data</h2>
        <p>
          We keep email correspondence only as long as reasonably necessary to deal
          with your query and to have a record in case you contact us again. We don&apos;t
          keep it indefinitely as a matter of course.
        </p>

        <h2>Contacting us about your data</h2>
        <p>
          If you have any question about this policy or want to exercise your rights
          over data we hold, use the details on our{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>
          . You also have the right to raise a concern with the Information
          Commissioner&apos;s Office (ICO), the UK&apos;s independent regulator for
          data protection.
        </p>
      </div>
    </div>
  );
}
