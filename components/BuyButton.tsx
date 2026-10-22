import { site } from "@/lib/site";
import { ArrowIcon } from "./Icons";

type BuyButtonProps = {
  size?: "sm" | "md" | "lg";
  /** Show the price inside the button label, e.g. "Buy Now for ₹299". */
  withPrice?: boolean;
  /** "light" is for dark backgrounds. */
  variant?: "primary" | "light";
  className?: string;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

const variants = {
  primary: "bg-brand-dark text-white hover:bg-brand-deep active:bg-brand-deep",
  light: "bg-beige text-ink hover:bg-white active:bg-white focus-visible:outline-beige",
} as const;

/**
 * Every Buy Now button on the site. Opens the payment link (NEXT_PUBLIC_BUY_URL)
 * in a new tab.
 */
export function BuyButton({
  size = "md",
  withPrice = false,
  variant = "primary",
  className = "",
}: BuyButtonProps) {
  return (
    <a
      href={site.buyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold shadow-sm transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{withPrice ? `Buy Now for ${site.priceDisplay}` : "Buy Now"}</span>
      <span className="sr-only"> (opens in a new tab)</span>
      {size !== "sm" && <ArrowIcon className="h-5 w-5" />}
    </a>
  );
}
