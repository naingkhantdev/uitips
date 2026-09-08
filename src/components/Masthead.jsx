/**
 * Modernist masthead — flush left, mono kicker, hairline close — with a
 * Y2K chrome wordmark.
 *
 * lede/anatomy carry inline <strong>/<em> from the source content, which
 * is authored in this repo and not user input.
 */
export default function Masthead({ t, lang }) {
  const my = lang === "my";

  return (
    <header className="mt-8 border-b border-rule pb-9">
      <p
        className={`label ${my ? "label-my" : ""} m-0 mb-5 flex flex-wrap items-center gap-3.5`}
      >
        {t.kick}
        <span className="text-ink-3">{t.kick2}</span>
      </p>

      <h1
        className={
          my
            ? "chrome my m-0 max-w-[15ch] text-[clamp(30px,5.4vw,52px)] leading-[1.42] font-semibold"
            : "chrome m-0 max-w-[13ch] text-[clamp(42px,7.4vw,78px)] leading-[0.95] font-bold tracking-[-.035em]"
        }
      >
        {t.title}
      </h1>

      <p
        className={
          my
            ? "my m-0 mt-6 max-w-[54ch] text-[15px] text-ink-2 [&_strong]:font-semibold [&_strong]:text-ink"
            : "m-0 mt-6 max-w-[60ch] text-[16px] text-ink-2 [&_strong]:font-semibold [&_strong]:text-ink"
        }
        dangerouslySetInnerHTML={{ __html: t.lede }}
      />

      {/* Anatomy legend — three sunk chips, the modernist key to the grid */}
      <ul className="m-0 mt-7 flex list-none flex-wrap gap-2.5 p-0">
        {t.anat.map((item) => (
          <li
            key={item}
            className={`nm-sink px-3.5 py-2 text-[11.5px] text-ink-3 [&_b]:font-medium [&_b]:text-ink-2 ${
              my ? "my text-[12.5px]" : "font-mono"
            }`}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </header>
  );
}
