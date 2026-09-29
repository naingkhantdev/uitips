/**
 * Live specimen for one visual effect. Like the style swatches, every
 * preview carries the same content — the word "Studio" and one button —
 * so the effect is the only thing that changes. Styling lives in
 * styles/effects.css (class-driven, not Tailwind, for the same reason the
 * swatches are: each preview is its own little colour world).
 *
 * `a`/`b`/`c` are generic effect layers; each .fx-<id> decides what they
 * draw. Smoke is the one effect CSS can't fake on its own, so it brings
 * an SVG turbulence filter along with it.
 */
export default function EffectPreview({ id }) {
  return (
    <div className={`fx fx-${id}`} aria-hidden="true">
      {id === "smoke" && (
        <svg className="absolute h-0 w-0" focusable="false">
          <filter id="fx-smoke-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves="3" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="70" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
      )}
      <i className="fx-l a" />
      <i className="fx-l b" />
      <i className="fx-l c" />
      <div className="fx-mini">
        <span className="fx-ttl" data-text="Studio">Studio</span>
        <span className="fx-btn">View</span>
      </div>
    </div>
  );
}
