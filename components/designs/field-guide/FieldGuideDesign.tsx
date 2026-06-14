import { h4 } from "@/content/h4";
import { SpecimenTree } from "./SpecimenTree";
import styles from "./field-guide.module.css";

const SPECIMENS: Array<{
  key: keyof typeof h4.pillars;
  label: string;
  specimen: string;
  catalog: string;
  glyph: "leaf" | "feather" | "fruit";
}> = [
  {
    key: "mission",
    label: "Mission",
    specimen: "Specimen 01 · Adaptive form",
    catalog: "Plate II · Obs. 0247",
    glyph: "leaf",
  },
  {
    key: "vision",
    label: "Vision",
    specimen: "Specimen 02 · Migratory range",
    catalog: "Plate II · Obs. 0248",
    glyph: "feather",
  },
  {
    key: "purpose",
    label: "Purpose",
    specimen: "Specimen 03 · Fruiting body",
    catalog: "Plate II · Obs. 0249",
    glyph: "fruit",
  },
];

function Glyph({ kind }: { kind: "leaf" | "feather" | "fruit" }) {
  if (kind === "leaf") {
    return (
      <svg viewBox="0 0 60 60" className={styles.glyph}>
        <path
          d="M 30 8 Q 12 22 14 38 Q 16 50 30 52 Q 44 50 46 38 Q 48 22 30 8 Z"
          fill="rgba(107, 122, 82, 0.18)"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path
          d="M 30 12 L 30 50"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <path
              d={`M 30 ${18 + i * 6} Q 22 ${20 + i * 6} 18 ${22 + i * 6}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.45"
            />
            <path
              d={`M 30 ${18 + i * 6} Q 38 ${20 + i * 6} 42 ${22 + i * 6}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.45"
            />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === "feather") {
    return (
      <svg viewBox="0 0 60 60" className={styles.glyph}>
        <path
          d="M 30 6 Q 18 18 18 32 Q 18 46 30 54 Q 42 46 42 32 Q 42 18 30 6 Z"
          fill="rgba(168, 107, 110, 0.16)"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <path d="M 30 8 L 30 56" stroke="currentColor" strokeWidth="0.7" />
        {Array.from({ length: 8 }, (_, i) => (
          <g key={i}>
            <path
              d={`M 30 ${14 + i * 4.5} Q 24 ${14 + i * 4.5 + 1.5} 20 ${20 + i * 4.5}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
            <path
              d={`M 30 ${14 + i * 4.5} Q 36 ${14 + i * 4.5 + 1.5} 40 ${20 + i * 4.5}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </g>
        ))}
      </svg>
    );
  }
  // fruit
  return (
    <svg viewBox="0 0 60 60" className={styles.glyph}>
      <path
        d="M 30 14 Q 18 12 12 24 Q 8 38 18 48 Q 28 56 36 50 Q 50 44 50 30 Q 50 18 38 14 Q 34 14 30 14 Z"
        fill="rgba(28, 61, 107, 0.16)"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M 30 14 Q 28 8 32 4 Q 36 6 36 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <circle cx="22" cy="28" r="1.4" fill="currentColor" opacity="0.5" />
      <circle cx="34" cy="34" r="1.2" fill="currentColor" opacity="0.4" />
      <circle cx="28" cy="42" r="1.6" fill="currentColor" opacity="0.55" />
      <circle cx="40" cy="26" r="1.1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function FieldGuideDesign() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <span className={styles.mastheadName}>
            <span className={styles.mastheadH4}>H4</span>
            <span className={styles.mastheadDivider}>·</span>
            <span className={styles.mastheadSub}>
              A Field Guide to Capability
            </span>
          </span>
          <span className={styles.mastheadCoord}>Plate II · MMXXVI</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Plate II · From the field</p>
          <h1 className={styles.heroHeadline}>
            How a learner <em>grows</em> reveals what they will{" "}
            <span className={styles.becomeInk}>become.</span>
          </h1>
          <p className={styles.heroLede}>{h4.tagline}</p>
          <a href={h4.cta.href} className={styles.heroCta}>
            <span>Take a specimen</span>
            <span className={styles.heroCtaArrow}>→</span>
          </a>
          <p className={styles.heroAnnotation}>
            ↳ obs. cohort: students aged 13–16 · drawn from life
          </p>
        </div>
        <div className={styles.specimenWrap}>
          <SpecimenTree />
        </div>
      </section>

      <section className={styles.pillars}>
        <div className={styles.pillarsRule} aria-hidden />
        <div className={styles.pillarsHeader}>
          <p className={styles.pillarsKicker}>From the catalog</p>
          <h2 className={styles.sectionTitle}>Three specimens, observed.</h2>
          <p className={styles.sectionSub}>
            Every learner displays distinct features. We catalog three the
            field guide returns to most often — the ways a student takes
            root, takes flight, and bears fruit.
          </p>
        </div>

        <div className={styles.pillarGrid}>
          {SPECIMENS.map(({ key, label, specimen, catalog, glyph }) => (
            <article key={key} className={styles.specimen}>
              <div className={styles.specimenGlyph}>
                <Glyph kind={glyph} />
              </div>
              <div className={styles.specimenHead}>
                <span className={styles.specimenTag}>{specimen}</span>
              </div>
              <h3 className={styles.specimenLabel}>{label}</h3>
              <p className={styles.specimenBody}>{h4.pillars[key]}</p>
              <p className={styles.specimenCatalog}>{catalog}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.essay}>
        <div className={styles.essayInner}>
          <p className={styles.essayKicker}>Notes from the field</p>
          <h2 className={styles.essayTitle}>What we have observed.</h2>
          {h4.overview.paragraphs.map((p, i) => (
            <p key={i} className={styles.essayPara}>
              {i === 0 && (
                <span className={styles.essayDropcap}>{p.charAt(0)}</span>
              )}
              {i === 0 ? p.slice(1) : p}
            </p>
          ))}
        </div>
      </section>

      <footer className={styles.colophon}>
        <div className={styles.colophonInner}>
          <div>
            <p className={styles.colophonName}>H4</p>
            <p className={styles.colophonImprint}>
              Drawing what learners do — so we may know what they may
              become.
            </p>
          </div>
          <a href={h4.cta.href} className={styles.colophonCta}>
            Begin a field study →
          </a>
        </div>
        <div className={styles.colophonRule} aria-hidden />
        <p className={styles.colophonMeta}>
          Plate II of an ongoing series · Drawn from observation · MMXXVI
        </p>
      </footer>
    </div>
  );
}
