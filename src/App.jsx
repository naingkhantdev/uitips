import { useEffect, useState } from "react";
import { STYLES, GROUPS, RAIL, METHOD, VOCAB, COLOR, ALIGN, COMBOS, LIBRARIES, UI } from "./data/content.js";
import Topbar from "./components/Topbar.jsx";
import Masthead from "./components/Masthead.jsx";
import Tabs from "./components/Tabs.jsx";
import ComboPreview from "./components/ComboPreview.jsx";
import SectionHead from "./components/SectionHead.jsx";
import StyleCard from "./components/StyleCard.jsx";
import DetailSheet from "./components/DetailSheet.jsx";
import Rail from "./components/Rail.jsx";

const pad = (n) => String(n).padStart(2, "0");

export default function App() {
  const [lang, setLang] = useState("my");
  const [openIndex, setOpenIndex] = useState(null);
  const [tab, setTab] = useState("styles");
  const t = UI[lang];
  const my = lang === "my";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const TABS = [
    { id: "styles", label: t.tabStyles, count: pad(STYLES.length) },
    { id: "color", label: t.tabColor, count: pad(COLOR.length) },
    { id: "combos", label: t.tabCombos, count: pad(COMBOS.length) },
    { id: "principles", label: t.tabPrinciples, count: pad(METHOD.length + ALIGN.length + VOCAB.length) },
    { id: "resources", label: t.tabResources, count: pad(LIBRARIES.length) }
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-6">
      <Topbar lang={lang} setLang={setLang} hint={t.hint} />
      <Masthead t={t} lang={lang} />
      <Tabs tabs={TABS} active={tab} onChange={setTab} lang={lang} />

      <main>
        {tab === "styles" && GROUPS.map((group, g) => {
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

        {tab === "color" && (
          <section className="pt-14">
            <SectionHead lang={lang} title={t.colorH} count={pad(COLOR.length)} intro={t.colorP} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
              {COLOR.map((c) => (
                <div key={c[0]} className="nm-raise-sm flex flex-col gap-2.5 p-4">
                  {c[4] && (
                    <div className="flex gap-1.5">
                      {c[4].map((hex) => (
                        <span
                          key={hex}
                          className="h-5 w-5 rounded-full shadow-[inset_0_0_0_1px_var(--nm-rule)]"
                          style={{ background: hex }}
                        />
                      ))}
                    </div>
                  )}
                  <b className={`m-0 text-[13.5px] font-semibold text-ink ${my ? "my text-[14px]" : ""}`}>
                    {my ? c[1] : c[0]}
                  </b>
                  <span className={`text-[12.5px] leading-[1.5] text-ink-2 ${my ? "my" : ""}`}>
                    {my ? c[3] : c[2]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "combos" && (
          <section className="pt-14">
            <SectionHead lang={lang} title={t.combosH} count={pad(COMBOS.length)} intro={t.combosP} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {COMBOS.map((c) => (
                <div key={c.n} className="nm-raise-sm flex flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <b className={`m-0 text-[13.5px] leading-[1.3] font-semibold text-ink ${my ? "my text-[14px]" : ""}`}>
                      {my ? c.mn : c.n}
                    </b>
                    <span
                      className={`nm-sink shrink-0 px-2 py-1 whitespace-nowrap text-ink-3 ${
                        my ? "my text-[10.5px]" : "font-mono text-[9.5px] tracking-[.08em] uppercase"
                      }`}
                    >
                      {c.plat === "web" ? t.platWeb : c.plat === "mobile" ? t.platMobile : t.platBoth}
                    </span>
                  </div>

                  <ComboPreview combo={c} />

                  <div className="flex items-center gap-1.5">
                    {c.colors.map((hex) => (
                      <span
                        key={hex}
                        className="h-3.5 w-3.5 rounded-full shadow-[inset_0_0_0_1px_var(--nm-rule)]"
                        style={{ background: hex }}
                      />
                    ))}
                    <span className="num ml-1 font-mono text-[10px] tracking-[.02em] text-ink-3">
                      {t.headLbl}: {c.head} · {t.bodyLbl}: {c.body}
                    </span>
                  </div>

                  <span className={`text-[12.5px] leading-[1.5] text-ink-2 ${my ? "my" : ""}`}>
                    {my ? c.m : c.e}
                  </span>

                  <div className="nm-sink flex flex-col gap-1 px-3 py-2.5">
                    <span className={`label ${my ? "label-my" : ""}`}>{t.recLbl}</span>
                    <p className={`m-0 text-[11.5px] leading-[1.5] text-ink-2 ${my ? "my" : ""}`}>
                      {my ? c.recM : c.rec}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "principles" && (
          <>
            <section className="pt-14">
              <SectionHead lang={lang} title={t.method} count={pad(METHOD.length)} intro={t.methodP} />
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
              <SectionHead lang={lang} title={t.alignH} count={pad(ALIGN.length)} intro={t.alignP} />
              <dl className="nm-raise m-0 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-11 gap-y-0 px-6 py-2">
                {ALIGN.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-[minmax(0,170px)_1fr] items-baseline gap-4 border-t border-rule py-3.5 max-[560px]:grid-cols-1 max-[560px]:gap-1"
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
              <SectionHead lang={lang} title={t.vocabH} count={pad(VOCAB.length)} intro={t.vocabP} />
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
          </>
        )}

        {tab === "resources" && (
          <section className="pt-14">
            <SectionHead lang={lang} title={t.libH} count={pad(LIBRARIES.length)} intro={t.libP} />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
              {LIBRARIES.map((lib) => (
                <a
                  key={lib.n}
                  href={lib.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nm-raise-sm nm-lift group flex flex-col gap-2 p-4"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="m-0 text-[14.5px] leading-tight font-semibold tracking-[-.01em] text-ink">
                      {lib.n}
                    </h3>
                    <span className="label shrink-0 after:ml-1 after:content-['↗'] group-hover:text-ink">
                      {t.visit}
                    </span>
                  </div>
                  <p className={`m-0 text-[13px] leading-[1.5] text-ink-2 ${my ? "my" : ""}`}>
                    {my ? lib.fm : lib.fe}
                  </p>
                  <span className="num mt-auto pt-1 font-mono text-[10.5px] tracking-[.06em] text-ink-3">
                    {my ? lib.sm : lib.se}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
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
