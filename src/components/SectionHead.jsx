/** Modernist section head: title, tabular count chip, one line of intro,
 *  closed by a hairline. Identical rhythm for all six sections. */
export default function SectionHead({ title, count, intro, lang }) {
  const my = lang === "my";

  return (
    <div className="mb-7 flex flex-wrap items-baseline gap-4 border-b border-rule pb-3">
      <h2
        className={
          my
            ? "my m-0 text-[24px] leading-[1.5] font-semibold text-ink"
            : "m-0 text-[30px] leading-[1.1] font-bold tracking-[-.03em] text-ink"
        }
      >
        {title}
      </h2>
      <span className="nm-raise-sm num px-2.5 py-1.5 font-mono text-[11px] tracking-[.14em] text-ink-3">
        {count}
      </span>
      <p
        className={`m-0 max-w-[52ch] flex-[1_1_300px] text-[14px] text-ink-2 ${my ? "my" : ""}`}
      >
        {intro}
      </p>
    </div>
  );
}
