/**
 * Two miniature mockups per combo — a browser-chrome "website" frame and a
 * phone-shaped "mobile" frame — both rendered with the combo's own colours,
 * fonts and corner radius, so the pairing is seen rather than only named.
 */
export default function ComboPreview({ combo }) {
  const [bg, ink, accent] = combo.colors;
  const headFont = { fontFamily: `"${combo.head}", var(--sans)` };
  const bodyFont = { fontFamily: `"${combo.body}", var(--sans)` };
  const r = combo.radius;

  return (
    <div className="flex gap-2.5">
      {/* Website */}
      <div
        className="min-w-0 flex-1 overflow-hidden shadow-[inset_0_0_0_1px_var(--nm-rule)]"
        style={{ background: bg, borderRadius: Math.min(r, 10) }}
      >
        <div className="flex items-center gap-1 px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
        </div>
        <div className="px-2.5 pt-1.5 pb-3">
          <p className="m-0 truncate text-[11px] leading-[1.25] font-semibold" style={{ ...headFont, color: ink }}>
            {combo.n}
          </p>
          <p className="m-0 mt-1 text-[8.5px] leading-[1.45]" style={{ ...bodyFont, color: `${ink}99` }}>
            Design & product copy goes here.
          </p>
          <span
            className="mt-2 inline-block px-2 py-1 text-[7.5px] font-medium text-white"
            style={{ background: accent, borderRadius: Math.min(r, 6), ...bodyFont }}
          >
            Get started
          </span>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="w-[72px] shrink-0 overflow-hidden shadow-[inset_0_0_0_1px_var(--nm-rule)]"
        style={{ background: bg, borderRadius: Math.min(r + 4, 18) }}
      >
        <div className="flex justify-center pt-1.5">
          <span className="h-1 w-6 rounded-full" style={{ background: `${ink}33` }} />
        </div>
        <div className="px-2 pt-2 pb-2.5">
          <p className="m-0 truncate text-[9px] leading-[1.2] font-semibold" style={{ ...headFont, color: ink }}>
            {combo.n}
          </p>
          <div className="mt-1.5 h-6 w-full" style={{ background: `${ink}14`, borderRadius: Math.min(r, 8) }} />
          <span
            className="mt-1.5 block px-1.5 py-1 text-center text-[7px] font-medium text-white"
            style={{ background: accent, borderRadius: Math.min(r, 20), ...bodyFont }}
          >
            Continue
          </span>
        </div>
      </div>
    </div>
  );
}
