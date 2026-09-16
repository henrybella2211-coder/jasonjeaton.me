import Link from "next/link";
import { ReactNode } from "react";

type PillProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "cream";
  className?: string;
};

export default function Pill({
  href,
  children,
  variant = "primary",
  className = "",
}: PillProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors duration-150 min-h-[48px]";
  const variants: Record<string, string> = {
    primary: "bg-primary text-cream hover:bg-primary-dark",
    outline:
      "border-2 border-plum text-plum hover:bg-plum hover:text-cream bg-transparent",
    cream: "bg-cream text-plum hover:bg-butter",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
