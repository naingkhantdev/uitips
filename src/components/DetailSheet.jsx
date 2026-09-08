import { useEffect, useRef } from "react";
import Swatch from "./Swatch.jsx";

/**
 * Detail dialog. Keeps the original's behaviour: Escape closes, the
 * backdrop closes, body scroll locks, focus moves to the close button and
 * returns to the card that opened it.
 *
 * Bilingual body: whichever language is active is printed first and in
 * full weight, the other follows underneath as a quieter gloss.
 */
export default function DetailSheet({ style, lang, t, onClose }) {
  const closeRef = useRef(null);
  const restoreRef = useRef(null);
  const my = lang === "my";

  useEffect(() => {
    restoreRef.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus?.();
    };
  }, [onClose]);

  const Block = ({ label, en, mm }) => (
    <div className="flex flex-col gap-2 border-t border-rule pt-4">
      <span className={`label ${my ? "label-my" : ""}`}>{label}</span>
      <p className={my ? "my m-0 text-[14px] text-ink" : "m-0 text-[14px] leading-[1.6] text-ink-2"}>
        {my ? mm : en}
      </p>
      <p className={my ? "m-0 text-[13px] leading-[1.6] text-ink-3" : "my m-0 text-[13px] text-ink-3"}>
        {my ? en : mm}
      </p>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-[rgba(10,16,30,.62)] p-4 backdrop-blur-[3px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        className="nm-raise m-auto w-full max-w-[580px] overflow-hidden p-3.5 shadow-[7px_7px_15px_var(--nm-lo),-7px_-7px_15px_var(--nm-hi),0_28px_70px_rgba(0,0,0,.45)]"
      >
        <div className="relative overflow-hidden rounded-[13px] shadow-[inset_0_0_0_1px_var(--nm-rule)]">
          <Swatch style={style} className="h-[212px]!" />
        </div>

        <div className="flex flex-col gap-4 px-1.5 pt-5 pb-1">
          <div className="flex items-start justify-between gap-3.5">
            <div>
              <h3
                id="sheet-title"
                className="m-0 text-[21px] leading-[1.25] font-bold tracking-[-.02em] text-ink"
              >
                {style.n}
              </h3>
              <span className="my mt-1.5 block text-[14px] font-medium text-ink-2">
                {style.mn}
              </span>
            </div>
            <span className="num nm-sink px-2.5 py-1.5 font-mono text-[11px] whitespace-nowrap text-ink-3">
              {style.era}
            </span>
          </div>

          <Block label={t.lblWhat} en={style.e} mm={style.m} />
          <Block label={t.lblTell} en={style.te} mm={style.tm} />
          <Block label={t.lblWhere} en={style.we} mm={style.wm} />

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className={`nm-raise-sm nm-lift y2k-gloss relative mt-1 w-full cursor-pointer py-3.5 font-medium text-accent ${
              my ? "my text-[13px]" : "font-mono text-[11px] tracking-[.14em] uppercase"
            }`}
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
}
