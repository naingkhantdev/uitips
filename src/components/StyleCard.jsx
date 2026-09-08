import Swatch from "./Swatch.jsx";

/**
 * Neumorphic tile with the specimen carved into its face. The card is a
 * real <button>, so the press state does double duty: neumorphism's
 * inverted extrusion *is* the active affordance.
 */
export default function StyleCard({ style, lang, cue, onOpen }) {
  const my = lang === "my";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="nm-raise nm-lift group flex w-full flex-col p-3 text-left"
    >
      {/* The swatch sits in a sunk frame — carved out of the tile, not
          pasted onto it. The hairline is the modernist half of the joint. */}
      <div className="relative overflow-hidden rounded-[12px] shadow-[inset_0_0_0_1px_var(--nm-rule)]">
        <Swatch style={style} />
        <span className="pointer-events-none absolute inset-0 rounded-[12px] shadow-[inset_3px_3px_8px_rgba(0,0,0,.16)]" />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-1.5 pt-4 pb-1">
        <div className="flex items-baseline justify-between gap-2.5">
          <h3
            className={
              my
                ? "my m-0 text-[14.5px] leading-[1.55] font-semibold text-ink"
                : "m-0 text-[15px] leading-tight font-semibold tracking-[-.01em] text-ink"
            }
          >
            {my ? style.mn : style.n}
          </h3>
          <span className="num font-mono text-[10px] whitespace-nowrap text-ink-3">
            {style.era}
          </span>
        </div>

        <p
          className={
            my
              ? "my m-0 text-[14px] text-ink-2"
              : "m-0 text-[13.5px] leading-[1.5] text-ink-2"
          }
        >
          {my ? style.m : style.e}
        </p>

        <span
          className={`label ${my ? "label-my" : ""} mt-auto flex items-center gap-1.5 pt-3 after:content-['→'] group-hover:text-ink`}
        >
          {cue}
        </span>
      </div>
    </button>
  );
}
