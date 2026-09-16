import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Switch Kit is an independent UK editorial website helping former disposable-vape users find a reusable replacement, now that single-use disposables are banned.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      <h1 className="mt-6 font-heading text-4xl font-bold text-plum">About Switch Kit</h1>

      <div className="relative mt-8 h-56 w-full overflow-hidden rounded-2xl sm:h-72">
        <Image
          src="/images/pod-kit-with-eliquid-bottle.jpg"
          alt="A pod vape kit standing next to a bottle of e-liquid on a wooden surface"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="prose-switchkit mt-10 text-[17px] text-plum">
        <p>
          Switch Kit is an independent UK information website. We&apos;re not a vape
          shop, a manufacturer, or affiliated with any specific brand. Our only focus
          is helping people who used disposable vapes before the June 2025 ban find a
          reusable, refillable replacement that suits how they actually used their old
          device.
        </p>
        <p>
          That&apos;s a narrower brief than most vaping sites take on, and it&apos;s
          deliberate. Rather than trying to cover every corner of the vaping world, we
          write specifically for someone who liked the simplicity of a disposable,
          found the ban confusing or frustrating, and wants a plain-English steer
          towards a similar experience without the single-use waste.
        </p>

        <h2>Who writes this</h2>
        <p>
          Content on Switch Kit is written and edited by our UK-based editorial team.
          We don&apos;t publish individual author bylines with invented names,
          credentials or headshots, everything here is a genuinely collective editorial
          effort, researched against official sources rather than any one person&apos;s
          opinion.
        </p>

        <h2>How we approach content</h2>
        <p>
          We describe categories of device and how to compare them, rather than
          publishing ranked &quot;best of&quot; lists or claiming to have personally
          tested specific products. Where we state a legal or regulatory fact, such as
          nicotine strength limits or the disposable vape ban itself, we&apos;ve based
          it on official UK sources including GOV.UK, the MHRA and the NHS. You can read
          more about how we research and update articles on our{" "}
          <Link href="/editorial-policy" className="text-primary underline underline-offset-2">
            editorial policy page
          </Link>
          .
        </p>

        <h2>Who this site is for</h2>
        <p>
          Switch Kit is written for adults aged 18 and over who already smoke or vape
          and are looking for practical information about reusable vaping products.
          It is not intended to encourage anyone under 18, or anyone who doesn&apos;t
          already smoke or vape, to start. See our{" "}
          <Link href="/age-notice" className="text-primary underline underline-offset-2">
            age notice
          </Link>{" "}
          for more detail.
        </p>

        <h2>Get in touch</h2>
        <p>
          If you&apos;ve spotted something inaccurate, out of date, or you just want to
          ask a question, our{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2">
            contact page
          </Link>{" "}
          has the details. {siteConfig.name} is a small, independent site, and we do
          read what comes in.
        </p>
      </div>
    </div>
  );
}
