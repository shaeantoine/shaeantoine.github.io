import { h4 } from "@/content/h4";
import styles from "./manifesto.module.css";

const ROMAN = ["I", "II", "III"] as const;
const PILLARS: Array<{ key: keyof typeof h4.pillars; label: string }> = [
  { key: "mission", label: "Mission" },
  { key: "vision", label: "Vision" },
  { key: "purpose", label: "Purpose" },
];

export function ManifestoDesign() {
  return (
    <article className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadLabel}>
          <span>H4 / A Manifesto</span>
          <span>Vol. I · Founders' Edition</span>
        </div>
      </header>

      <section className={styles.hero}>
        <h1 className={styles.heroHeadline}>
          The way we distribute opportunity to young people is broken.
        </h1>
        <p className={styles.heroLogo}>{h4.name}</p>
      </section>

      <section className={styles.lede}>
        <p className={styles.tagline}>{h4.tagline}</p>
      </section>

      <section className={styles.pillars}>
        {PILLARS.map(({ key, label }, i) => (
          <article key={key} className={styles.pillar}>
            <div className={styles.pillarHead}>
              <span className={styles.pillarRoman}>{ROMAN[i]}.</span>
              <span className={styles.pillarLabel}>{label}</span>
            </div>
            <p className={styles.pillarBody}>{h4.pillars[key]}</p>
          </article>
        ))}
      </section>

      <section className={styles.essay}>
        <h2 className={styles.essayKicker}>An Overview</h2>
        {h4.overview.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`${styles.essayPara} ${i === 0 ? styles.essayParaFirst : ""}`}
          >
            {p}
          </p>
        ))}

        <blockquote className={styles.pullquote}>
          “Learning is the richest source of capability data ever created.”
        </blockquote>
      </section>

      <footer className={styles.colophon}>
        <div className={styles.colophonRule} />
        <div className={styles.colophonRow}>
          <p className={styles.colophonText}>
            For school leaders, partners, and the curious.
          </p>
          <a href={h4.cta.href} className={styles.colophonLink}>
            {h4.cta.label} →
          </a>
        </div>
        <p className={styles.colophonImprint}>
          Set in a typographer's serif. Printed on the open web. © H4.
        </p>
      </footer>
    </article>
  );
}
