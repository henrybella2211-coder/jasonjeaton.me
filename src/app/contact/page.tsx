import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Switch Kit editorial team by email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const subject = encodeURIComponent("Message for Switch Kit");
  const mailtoHref = `mailto:${siteConfig.contactEmail}?subject=${subject}`;

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">Contact us</h1>
      <p className="mt-4 text-lg leading-relaxed text-plum/80">
        Spotted something wrong, got a question about a guide, or want to flag an
        update we&apos;ve missed? Email us directly and a member of our editorial team
        will get back to you.
      </p>

      <div className="mt-8 rounded-2xl bg-peach p-8 text-center">
        <p className="font-heading text-xl font-semibold text-plum">
          {siteConfig.contactEmail}
        </p>
        <p className="mt-2 text-sm text-plum/70">
          This opens your email app with the address filled in.
        </p>
        <a
          href={mailtoHref}
          className="mt-6 inline-block rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-primary-dark"
        >
          Email the editorial team
        </a>
      </div>

      <p className="mt-8 text-sm text-plum/70">
        We&apos;re a small independent site, so please be patient if a reply takes a
        few days. We read every message but can&apos;t always respond individually to
        general feedback.
      </p>
    </div>
  );
}
