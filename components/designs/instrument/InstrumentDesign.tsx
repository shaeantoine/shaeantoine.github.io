"use client";

import { useEffect, useState } from "react";
import { h4 } from "@/content/h4";
import styles from "./instrument.module.css";

const CAPABILITIES = [
  { label: "Reasoning", base: 72 },
  { label: "Adaptation", base: 64 },
  { label: "Persistence", base: 81 },
  { label: "Synthesis", base: 58 },
  { label: "Transfer", base: 69 },
];

const OBSERVATIONS = [
  "Detected analogical leap on prompt #47",
  "Confidence rising — strategy stable across 3 attempts",
  "Hypothesis revised after counter-example",
  "Preference forming: visual representation",
  "Working memory load nominal",
  "Unprompted self-correction observed",
  "Concept transferred from algebra → physics",
  "Persistence above cohort average",
  "Re-engagement after frustration window",
  "Pattern locked: prefers to test-then-revise",
];

const PILLARS: Array<{ key: keyof typeof h4.pillars; label: string; code: string }> = [
  { key: "mission", label: "Mission", code: "MIS-01" },
  { key: "vision", label: "Vision", code: "VIS-02" },
  { key: "purpose", label: "Purpose", code: "PUR-03" },
];

export function InstrumentDesign() {
  const [tick, setTick] = useState(0);
  const [feedIndex, setFeedIndex] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setTick((t) => t + 1), 1100);
    const b = setInterval(
      () => setFeedIndex((i) => (i + 1) % OBSERVATIONS.length),
      1900
    );
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  const visibleFeed = Array.from({ length: 4 }, (_, i) =>
    OBSERVATIONS[(feedIndex + i) % OBSERVATIONS.length]
  );

  return (
    <div className={styles.page}>
      <div className={styles.scanlines} aria-hidden />

      <header className={styles.topbar}>
        <span className={styles.topbarLeft}>
          H4 :: LEARNER-MODEL.RUNTIME
        </span>
        <span className={styles.topbarRight}>
          ◉ live · session #{String(2048 + tick).padStart(4, "0")}
        </span>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>
            ↳ adaptive instruction · learner model · capability blueprint
          </p>
          <h1 className={styles.heroHeadline}>
            {h4.tagline.replace(/\.$/, "")}
            <span className={styles.cursor} />
          </h1>
          <p className={styles.heroSub}>{h4.overview.paragraphs[1]}</p>
          <div className={styles.ctaRow}>
            <a href={h4.cta.href} className={styles.ctaPrimary}>
              {h4.cta.label}
              <span className={styles.ctaArrow}>→</span>
            </a>
            <a href="#overview" className={styles.ctaGhost}>
              read.spec
            </a>
          </div>
        </div>

        <aside className={styles.panel}>
          <div className={styles.panelHead}>
            <span>learner_model.live</span>
            <span className={styles.panelDot} />
          </div>

          <div className={styles.bars}>
            {CAPABILITIES.map((c, i) => {
              const drift = Math.sin((tick + i * 1.7) * 0.6) * 6;
              const value = Math.max(20, Math.min(98, c.base + drift));
              return (
                <div key={c.label} className={styles.bar}>
                  <div className={styles.barLabel}>
                    <span>{c.label}</span>
                    <span>{value.toFixed(1)}</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.feedHead}>
            <span className={styles.feedTitle}>observation_feed</span>
            <span className={styles.feedMeta}>{OBSERVATIONS.length} events</span>
          </div>
          <ul className={styles.feed}>
            {visibleFeed.map((line, i) => (
              <li
                key={`${feedIndex}-${i}`}
                className={styles.feedLine}
                style={{ opacity: 1 - i * 0.22 }}
              >
                <span className={styles.feedDot} />
                {line}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="overview" className={styles.pillars}>
        {PILLARS.map(({ key, label, code }) => (
          <article key={key} className={styles.pillar}>
            <div className={styles.pillarCode}>{code}</div>
            <h3 className={styles.pillarLabel}>{label}</h3>
            <p className={styles.pillarBody}>{h4.pillars[key]}</p>
          </article>
        ))}
      </section>

      <section className={styles.essay}>
        <h2 className={styles.essayKicker}>// overview</h2>
        <div className={styles.essayGrid}>
          {h4.overview.paragraphs.map((p, i) => (
            <div key={i} className={styles.essayBlock}>
              <span className={styles.essayNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.bottombar}>
        <div className={styles.bottomLeft}>
          <span className={styles.brandMark}>H4</span>
          <span className={styles.brandMeta}>ver. 0.1 · 2026</span>
        </div>
        <a href={h4.cta.href} className={styles.bottomCta}>
          {h4.cta.label} →
        </a>
      </footer>
    </div>
  );
}
