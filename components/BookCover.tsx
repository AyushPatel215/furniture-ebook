import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/lib/site";

const coverAlt = `${site.productName}: ${site.pages}-page PDF ebook cover`;

/**
 * Checked at build time (the page is fully static). Once the file at site.cover.src
 * exists, the real cover is used; until then a lightweight CSS mockup renders.
 */
function hasCoverImage(): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", site.cover.src));
}

export function BookCover() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-beige blur-2xl"
      />
      {hasCoverImage() ? (
        <Image
          src={site.cover.src}
          alt={coverAlt}
          width={site.cover.width}
          height={site.cover.height}
          preload
          sizes="(min-width: 640px) 320px, 280px"
          className="h-auto w-full rounded-r-xl rounded-l-sm shadow-2xl shadow-brand-deep/30"
        />
      ) : (
        <CssCover />
      )}
    </div>
  );
}

function CssCover() {
  return (
    <div
      role="img"
      aria-label={coverAlt}
      className="relative aspect-[3/4] w-full overflow-hidden rounded-r-xl rounded-l-sm bg-linear-to-br from-brand to-brand-deep text-white shadow-2xl shadow-brand-deep/30 [transform:perspective(1200px)_rotateY(-8deg)]"
    >
      {/* Spine shading */}
      <div className="absolute inset-y-0 left-0 w-4 bg-linear-to-r from-black/30 to-transparent" />
      <div className="absolute inset-y-0 left-4 w-px bg-white/20" />

      <div className="flex h-full flex-col justify-between p-7 pl-9">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-beige">
            PDF Guide · India
          </p>
          <div className="mt-6 h-px w-12 bg-beige/70" />
          <p className="mt-5 text-[1.65rem] font-extrabold leading-tight">
            Furniture Buying Made Easy
          </p>
          <p className="mt-3 text-sm leading-snug text-beige">
            What to ask, what to pay, and what to avoid
          </p>
        </div>

        {/* Simple furniture line drawing */}
        <svg
          viewBox="0 0 160 70"
          className="w-full text-beige/80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 40V28a6 6 0 0 1 6-6h58a6 6 0 0 1 6 6v12" />
          <path d="M12 40a6 6 0 0 1 12 0v10h62V40a6 6 0 0 1 12 0v16H12V40Z" />
          <path d="M18 56v6M92 56v6" />
          <path d="M118 62V20h30v42M118 34h30M118 48h30M131 27h4M131 41h4M131 55h4" />
        </svg>

        <div className="flex items-end justify-between text-xs text-beige">
          <span>{site.pages} pages</span>
          <span>
            {site.parts} parts · {site.topics} topics
          </span>
        </div>
      </div>
    </div>
  );
}
