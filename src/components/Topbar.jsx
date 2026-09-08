/**
 * Language switch as a neumorphic segmented control: the ground is sunk,
 * the selected segment is extruded back out of it and glossed (Y2K).
 */
export default function Topbar({ lang, setLang, hint }) {
  const my = lang === "my";

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-7">
      <span
        className={
          my
            ? "my text-[12px] text-ink-3"
            : "font-mono text-[11px] leading-[1.5] text-ink-3"
        }
      >
        {hint}
      </span>

      <div className="nm-sink flex gap-1 p-1.5" role="group" aria-label="Language">
        {[
          ["en", "English", "font-mono text-[11px] uppercase tracking-[.1em]"],
          ["my", "မြန်မာ", "my text-[12.5px]"],
        ].map(([code, text, type]) => {
          const on = lang === code;
          return (
            <button
              key={code}
              type="button"
              aria-pressed={on}
              onClick={() => setLang(code)}
              className={`${type} y2k-gloss relative cursor-pointer rounded-[9px] px-4 py-2.5 font-medium transition-colors ${
                on
                  ? "nm-raise-sm text-accent"
                  : "text-ink-3 hover:text-ink-2 before:hidden"
              }`}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
