/**
 * Screen-style chronology. A sunk trough with extruded year markers —
 * the timeline reads as something pressed into the page, which is the
 * one place neumorphism and a strict modernist rule agree.
 */
export default function Rail({ items, lang }) {
  const my = lang === "my";

  return (
    <div className="nm-sink mb-8 overflow-x-auto p-5">
      <ol className="m-0 flex min-w-[760px] list-none gap-0 p-0">
        {items.map((item) => (
          <li key={item.y} className="relative flex-1 pr-4 pb-6">
            <span className="num block font-mono text-[12px] font-medium text-ink">
              {item.y}
            </span>
            <span
              className={`mt-1.5 block text-[11.5px] text-ink-2 ${my ? "my text-[12px]" : ""}`}
            >
              {my ? item.m : item.e}
            </span>
            <span className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--nm-glow)]" />
            <span className="absolute bottom-[3px] left-0 h-px w-full bg-rule" />
          </li>
        ))}
      </ol>
    </div>
  );
}
