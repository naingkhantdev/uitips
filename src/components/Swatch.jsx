/**
 * A single specimen. Every swatch renders the *same four elements* —
 * eyebrow, the word "Studio", one line of copy, one button — so the only
 * variable across all 30 is the styling. Markup deliberately stays
 * class-driven (see styles/swatches.css) rather than Tailwind: each
 * swatch is its own design system and must not inherit the shell's.
 */
export default function Swatch({ style, className = "" }) {
  return (
    <div className={`swatch sw-${style.c} ${className}`}>
      {style.d.map((layer) => (
        <i key={layer} className={`deco ${layer}`} />
      ))}
      <div className="mini">
        {!style.noEye && <span className="eye">{style.eye}</span>}
        <span className="ttl">Studio</span>
        <span className="sub">{style.sub || "Design & Print"}</span>
        <span className="btn">{style.btn || "View"}</span>
      </div>
    </div>
  );
}
