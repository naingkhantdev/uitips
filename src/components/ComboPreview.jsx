/**
 * A browser-chrome "website" frame and/or a phone-shaped "mobile" frame,
 * both rendered with the combo's own colours, fonts and corner radius, so
 * the pairing is seen rather than only named. `variant` picks which frame(s)
 * to show and sizes the one shown up when it's on its own — a combo listed
 * under the Website group doesn't need a thumbnail phone squeezed beside it.
 */
export default function ComboPreview({ combo, variant = "both" }) {
  const [bg, ink, accent] = combo.colors;
  const headFont = { fontFamily: `"${combo.head}", var(--sans)` };
  const bodyFont = { fontFamily: `"${combo.body}", var(--sans)` };
  const r = combo.radius;

  const Website = ({ compact }) => (
    <div
      className={`min-w-0 overflow-hidden shadow-[inset_0_0_0_1px_var(--nm-rule)] ${compact ? "flex-1" : "w-full"}`}
      style={{ background: bg, borderRadius: Math.min(r, 10) }}
    >
      <div className="flex items-center gap-1 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: `${ink}33` }} />
      </div>
      <div className={compact ? "px-2.5 pt-1.5 pb-3" : "px-4 pt-2 pb-5"}>
        <p
          className={`m-0 truncate font-semibold ${compact ? "text-[11px] leading-[1.25]" : "text-[15px] leading-[1.3]"}`}
          style={{ ...headFont, color: ink }}
        >
          {combo.n}
        </p>
        <p
          className={`m-0 mt-1 ${compact ? "text-[8.5px] leading-[1.45]" : "text-[11px] leading-[1.5]"}`}
          style={{ ...bodyFont, color: `${ink}99` }}
        >
          Design & product copy goes here.
        </p>
        <span
          className={`mt-2 inline-block font-medium text-white ${compact ? "px-2 py-1 text-[7.5px]" : "px-3.5 py-2 text-[10.5px]"}`}
          style={{ background: accent, borderRadius: Math.min(r, 6), ...bodyFont }}
        >
          Get started
        </span>
      </div>
    </div>
  );

  const Mobile = ({ compact }) => (
    <div
      className={`shrink-0 overflow-hidden shadow-[inset_0_0_0_1px_var(--nm-rule)] ${compact ? "w-[72px]" : "mx-auto w-[132px]"}`}
      style={{ background: bg, borderRadius: Math.min(r + 4, 18) }}
    >
      <div className={`flex justify-center ${compact ? "pt-1.5" : "pt-2.5"}`}>
        <span
          className={compact ? "h-1 w-6 rounded-full" : "h-1.5 w-10 rounded-full"}
          style={{ background: `${ink}33` }}
        />
      </div>
      <div className={compact ? "px-2 pt-2 pb-2.5" : "px-3 pt-3 pb-4"}>
        <p
          className={`m-0 truncate font-semibold ${compact ? "text-[9px] leading-[1.2]" : "text-[12px] leading-[1.25]"}`}
          style={{ ...headFont, color: ink }}
        >
          {combo.n}
        </p>
        <div
          className={`mt-1.5 w-full ${compact ? "h-6" : "h-10"}`}
          style={{ background: `${ink}14`, borderRadius: Math.min(r, 8) }}
        />
        <span
          className={`mt-1.5 block text-center font-medium text-white ${compact ? "px-1.5 py-1 text-[7px]" : "px-2.5 py-1.5 text-[9.5px]"}`}
          style={{ background: accent, borderRadius: Math.min(r, 20), ...bodyFont }}
        >
          Continue
        </span>
      </div>
    </div>
  );

  if (variant === "web") return <Website compact={false} />;
  if (variant === "mobile") return <Mobile compact={false} />;

  return (
    <div className="flex gap-2.5">
      <Website compact />
      <Mobile compact />
    </div>
  );
}
