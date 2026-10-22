import { site } from "@/lib/site";
import { BuyButton } from "./BuyButton";

/**
 * Mobile-only bottom bar. It is position: fixed (so it never shifts layout)
 * and the page reserves matching bottom padding (see app/page.tsx) so it never
 * covers the footer.
 */
export function StickyBuyBar() {
  return (
    <aside
      aria-label="Buy the guide"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-beige bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(33,27,12,0.08)] backdrop-blur md:hidden"
    >
      <div className="flex h-16 items-center justify-between gap-3 px-4">
        <p className="leading-tight">
          <span className="block text-xl font-extrabold text-ink">{site.priceDisplay}</span>
          <span className="block text-xs text-ink-soft">Instant PDF download</span>
        </p>
        <BuyButton size="md" />
      </div>
    </aside>
  );
}
