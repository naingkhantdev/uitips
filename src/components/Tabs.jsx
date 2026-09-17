/**
 * Section switch as the same neumorphic segmented control used for the
 * language toggle: a sunk track, the active tab pressed back out of it
 * and glossed (Y2K). Splits the page into panels instead of one long
 * scroll — the sunk track scrolls horizontally on narrow screens.
 */
export default function Tabs({ tabs, active, onChange, lang }) {
  const my = lang === "my";

  return (
    <div
      className="nm-sink mt-8 flex gap-1 overflow-x-auto p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label="Sections"
    >
      {tabs.map((tab) => {
        const on = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(tab.id)}
            className={`y2k-gloss relative flex shrink-0 items-center gap-2 rounded-[9px] px-4 py-2.5 font-medium transition-colors ${
              my ? "my text-[13px]" : "font-mono text-[11px] uppercase tracking-[.1em]"
            } ${on ? "nm-raise-sm text-accent" : "text-ink-3 hover:text-ink-2 before:hidden"}`}
          >
            {tab.label}
            <span className="num text-ink-3">{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}
