import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/cookie-policy", label: "Cookie policy" },
  { href: "/terms", label: "Terms & disclaimer" },
  { href: "/age-notice", label: "Age notice" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-plum text-cream">
      <div className="border-b border-cream/15 bg-plum-light/60">
        <p className="mx-auto max-w-5xl px-5 py-3 text-center text-xs font-medium leading-relaxed text-cream/90 sm:px-8">
          18+ only. Switch Kit is written for adults who already smoke or vape and are
          looking for factual, practical information. Nothing here is intended to
          encourage anyone under 18, or anyone who has never smoked or vaped, to start.
          Read our{" "}
          <Link href="/age-notice" className="underline underline-offset-2 hover:text-primary">
            full age notice
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-cream">
              S
            </span>
            witch Kit
          </Link>
          <p className="max-w-md text-sm text-cream/75">{siteConfig.tagline}</p>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cream/80 underline-offset-4 hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Switch Kit. Independent UK vaping
            information, written and edited by our editorial team. Not affiliated with
            any vape manufacturer or retailer.
          </p>
        </div>
      </div>
    </footer>
  );
}
