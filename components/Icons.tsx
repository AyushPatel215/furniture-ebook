import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const CrossIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </Svg>
);

export const BookIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5v-2Z" />
    <path d="M8 7h7M8 11h5" />
  </Svg>
);

export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m3 10.5 9-7 9 7V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z" />
  </Svg>
);

export const QuoteDocIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Svg>
);

export const HingeIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="3" width="6" height="18" rx="1.5" />
    <rect x="14" y="3" width="6" height="18" rx="1.5" />
    <path d="M10 8h4M10 16h4" />
  </Svg>
);

export const KitchenIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="10" width="18" height="11" rx="1.5" />
    <path d="M3 15h18M12 10v11M8 4h8M10 4v3M14 4v3" />
  </Svg>
);

export const ReceiptIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3Z" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </Svg>
);

export const ClipboardCheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 13l2 2 4-4" />
  </Svg>
);

export const ArrowIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14m-5-5 5 5-5 5" />
  </Svg>
);

/** Same artwork as app/icon.svg. */
export const LogoMark = (p: IconProps) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" {...p}>
    <rect width="64" height="64" rx="14" fill="#7d5239" />
    <g
      fill="none"
      stroke="#efe2d3"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 33v-6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v6" />
      <path d="M13 33a3.5 3.5 0 0 1 7 0v5h24v-5a3.5 3.5 0 0 1 7 0v9H13z" />
      <path d="M17 42v4M47 42v4" />
    </g>
  </svg>
);
