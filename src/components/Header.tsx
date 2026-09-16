import Link from "next/link";
import Pill from "./Pill";

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-peach">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-plum"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-cream font-heading text-lg">
            S
          </span>
          <span className="font-heading">witch Kit</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-plum hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary mobile" className="flex gap-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-plum hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Pill href="/guides" className="hidden sm:inline-flex">
            Find your switch
          </Pill>
        </div>
      </div>
    </header>
  );
}
