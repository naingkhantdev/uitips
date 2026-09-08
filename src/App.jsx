import { useEffect, useState } from "react";
import { STYLES, GROUPS, RAIL, METHOD, VOCAB, UI } from "./data/content.js";
import Topbar from "./components/Topbar.jsx";
import Masthead from "./components/Masthead.jsx";
import SectionHead from "./components/SectionHead.jsx";
import StyleCard from "./components/StyleCard.jsx";
import DetailSheet from "./components/DetailSheet.jsx";
import Rail from "./components/Rail.jsx";

const pad = (n) => String(n).padStart(2, "0");

export default function App() {
  const [lang, setLang] = useState("my");
  const [openIndex, setOpenIndex] = useState(null);
  const t = UI[lang];
  const my = lang === "my";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-6">
      <Topbar lang={lang} setLang={setLang} hint={t.hint} />
      <Masthead t={t} lang={lang} />

      <main>
        {GROUPS.map((group, g) => {
          const items = STYLES.map((s, i) => [s, i]).filter(([s]) => s.g === g);
          return (
            <section key={group.e} className="pt-14">
              <SectionHead
                lang={lang}
                title={my ? group.m : group.e}
                count={pad(items.length)}
                intro={my ? group.pm : group.pe}
              />
              {/* The screen-style family is the only one that arrived in a
                  clear order, so it gets the chronology. */}
              {g === 2 && <Rail items={RAIL} lang={lang} />}
              <div className="grid grid-cols-[repeat(auto-fill,minmax(258px,1fr))] gap-6">
                {items.map(([style, i]) => (
                  <StyleCard
                    key={style.c}
                    style={style}
                    lang={lang}
                    cue={t.open}
                    onOpen={() => setOpenIndex(i)}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <section className="pt-14">
          <SectionHead lang={lang} title={t.method} count="10" intro={t.methodP} />
          <dl className="nm-raise m-0 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-11 gap-y-0 px-6 py-2">
            {METHOD.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[minmax(0,150px)_1fr] items-baseline gap-4 border-t border-rule py-3.5 max-[560px]:grid-cols-1 max-[560px]:gap-1"
              >
                <dt className={`m-0 text-[13px] font-semibold text-ink ${my ? "my" : ""}`}>
                  {my ? row[1] : row[0]}
                </dt>
                <dd className={`m-0 text-[13.5px] leading-[1.5] text-ink-2 ${my ? "my" : ""}`}>
                  {my ? row[3] : row[2]}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-14">
          <SectionHead lang={lang} title={t.vocabH} count="12" intro={t.vocabP} />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
            {VOCAB.map((word) => (
              <div key={word[0]} className="nm-raise-sm px-4 py-3.5">
                <b className="block font-mono text-[12px] leading-[1.4] font-medium text-ink">
                  {word[0]}
                  {my && <span className="my ml-1.5 text-ink-2">{word[1]}</span>}
                </b>
                <span
                  className={`mt-1 block text-[12.5px] leading-[1.45] text-ink-3 ${my ? "my" : ""}`}
                >
                  {my ? word[3] : word[2]}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t-2 border-ink pt-7">
        <div className="flex flex-wrap items-start justify-between gap-7">
          <p
            className={`m-0 max-w-[56ch] text-[14px] text-ink-2 [&_b]:font-semibold [&_b]:text-ink ${my ? "my" : ""}`}
            dangerouslySetInnerHTML={{ __html: t.closer }}
          />
          <p
            className="chrome m-0 text-right font-mono text-[12px] leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: t.sig }}
          />
        </div>

        {/* Byline bar. Solid ink rather than chrome: the gradient's dark band
            eats small type, and a credit has to stay readable. */}
        <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-5">
          <span className="font-mono text-[13px] font-semibold tracking-[.2em] text-ink uppercase">
            rkydev
          </span>
          <span className="num font-mono text-[11px] tracking-[.06em] text-ink-3">
            © {new Date().getFullYear()} rkydev. All rights reserved.
          </span>
        </div>
      </footer>

      {openIndex !== null && (
        <DetailSheet
          style={STYLES[openIndex]}
          lang={lang}
          t={t}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}
