type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ id, eyebrow, title, intro, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark">{eyebrow}</p>
      )}
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}
