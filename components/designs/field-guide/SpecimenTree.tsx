import styles from "./field-guide.module.css";

const BRANCHES = [
  { angle: -65, length: 32, label: "Reasoning", side: "left" as const },
  { angle: -35, length: 36, label: "Adaptation", side: "left" as const },
  { angle: 0, length: 38, label: "Persistence", side: "right" as const },
  { angle: 35, length: 36, label: "Synthesis", side: "right" as const },
  { angle: 65, length: 32, label: "Transfer", side: "right" as const },
];

const ROOTS = [
  { angle: 200, length: 18 },
  { angle: 220, length: 22 },
  { angle: 240, length: 18 },
  { angle: 260, length: 22 },
  { angle: 280, length: 22 },
  { angle: 300, length: 18 },
  { angle: 320, length: 22 },
  { angle: 340, length: 18 },
];

const TRUNK_X = 50;
const TRUNK_Y_TOP = 50;
const TRUNK_Y_BOTTOM = 64;

function polar(cx: number, cy: number, angleDeg: number, radius: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + Math.cos(a) * radius, y: cy + Math.sin(a) * radius };
}

export function SpecimenTree() {
  return (
    <svg
      viewBox="0 0 100 100"
      className={styles.specimenSvg}
      role="img"
      aria-label="A specimen drawing of capability — a tree with five labelled branches and an annotated root system"
    >
      <defs>
        <pattern
          id="fg-paper"
          width="3"
          height="3"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="0.6" cy="0.6" r="0.18" fill="rgba(30, 42, 68, 0.05)" />
        </pattern>
      </defs>

      {/* paper field */}
      <rect width="100" height="100" fill="url(#fg-paper)" />

      {/* corner pin marks (specimen mounted to page) */}
      {[
        [10, 10],
        [90, 10],
        [10, 90],
        [90, 90],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="1.6" fill="rgba(168, 133, 46, 0.85)" />
          <circle cx={x} cy={y} r="0.5" fill="rgba(30, 42, 68, 0.85)" />
        </g>
      ))}

      {/* horizon / ground line — divides above (tree) from below (roots) */}
      <line
        x1="14"
        y1="64"
        x2="86"
        y2="64"
        stroke="rgba(30, 42, 68, 0.35)"
        strokeWidth="0.25"
        strokeDasharray="0.6 0.5"
      />
      <text
        x="14"
        y="62.5"
        fontSize="1.5"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(30, 42, 68, 0.55)"
      >
        — soil line —
      </text>

      {/* trunk */}
      <path
        d={`M ${TRUNK_X} ${TRUNK_Y_BOTTOM} Q ${TRUNK_X - 1.2} ${(TRUNK_Y_TOP + TRUNK_Y_BOTTOM) / 2} ${TRUNK_X} ${TRUNK_Y_TOP}`}
        fill="none"
        stroke="rgba(30, 42, 68, 0.95)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d={`M ${TRUNK_X + 0.6} ${TRUNK_Y_BOTTOM - 1} Q ${TRUNK_X + 1.4} ${(TRUNK_Y_TOP + TRUNK_Y_BOTTOM) / 2} ${TRUNK_X + 0.6} ${TRUNK_Y_TOP}`}
        fill="none"
        stroke="rgba(30, 42, 68, 0.5)"
        strokeWidth="0.4"
      />

      {/* branches with subtle leaf clusters */}
      {BRANCHES.map((b) => {
        const tip = polar(TRUNK_X, TRUNK_Y_TOP, b.angle, b.length);
        const ctrl = polar(TRUNK_X, TRUNK_Y_TOP, b.angle * 0.6, b.length * 0.6);
        const labelPos = polar(TRUNK_X, TRUNK_Y_TOP, b.angle, b.length + 5);
        return (
          <g key={b.label}>
            <path
              d={`M ${TRUNK_X} ${TRUNK_Y_TOP} Q ${ctrl.x} ${ctrl.y} ${tip.x} ${tip.y}`}
              fill="none"
              stroke="rgba(30, 42, 68, 0.85)"
              strokeWidth="0.7"
              strokeLinecap="round"
            />
            {/* leaf cluster ellipse */}
            <ellipse
              cx={tip.x}
              cy={tip.y}
              rx="3.6"
              ry="2.4"
              fill="rgba(107, 122, 82, 0.22)"
              stroke="rgba(107, 122, 82, 0.7)"
              strokeWidth="0.32"
              transform={`rotate(${b.angle} ${tip.x} ${tip.y})`}
            />
            {/* small label dot */}
            <circle
              cx={tip.x}
              cy={tip.y}
              r="0.6"
              fill="rgba(168, 133, 46, 0.95)"
            />
            {/* hand-lettered branch label */}
            <text
              x={labelPos.x}
              y={labelPos.y}
              fontSize="2"
              fontFamily="serif"
              fontStyle="italic"
              textAnchor={b.side === "left" ? "end" : "start"}
              fill="rgba(30, 42, 68, 0.92)"
            >
              {b.label}
            </text>
          </g>
        );
      })}

      {/* roots */}
      {ROOTS.map((r, i) => {
        const tip = polar(TRUNK_X, TRUNK_Y_BOTTOM, r.angle, r.length);
        const ctrl = polar(
          TRUNK_X,
          TRUNK_Y_BOTTOM,
          r.angle - 6,
          r.length * 0.6
        );
        return (
          <path
            key={i}
            d={`M ${TRUNK_X} ${TRUNK_Y_BOTTOM} Q ${ctrl.x} ${ctrl.y} ${tip.x} ${tip.y}`}
            fill="none"
            stroke="rgba(30, 42, 68, 0.55)"
            strokeWidth="0.42"
            strokeLinecap="round"
            strokeDasharray={i % 2 === 0 ? "0.6 0.5" : "0.3 0.4"}
          />
        );
      })}

      {/* watercolor wash beneath canopy */}
      <ellipse
        cx="50"
        cy="34"
        rx="32"
        ry="12"
        fill="rgba(28, 61, 107, 0.04)"
      />
      <ellipse
        cx="50"
        cy="78"
        rx="22"
        ry="6"
        fill="rgba(168, 107, 110, 0.06)"
      />

      {/* margin annotations */}
      <text
        x="6"
        y="20"
        fontSize="1.6"
        fontFamily="serif"
        fontStyle="italic"
        fill="rgba(30, 42, 68, 0.75)"
      >
        canopy
      </text>
      <line
        x1="12"
        y1="22"
        x2="20"
        y2="32"
        stroke="rgba(30, 42, 68, 0.45)"
        strokeWidth="0.18"
      />

      <text
        x="92"
        y="76"
        fontSize="1.6"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="end"
        fill="rgba(30, 42, 68, 0.75)"
      >
        rootage
      </text>
      <line
        x1="86"
        y1="74"
        x2="78"
        y2="72"
        stroke="rgba(30, 42, 68, 0.45)"
        strokeWidth="0.18"
      />

      {/* scale bar (specimen height) */}
      <g transform="translate(8 90)">
        <line
          x1="0"
          y1="0"
          x2="14"
          y2="0"
          stroke="rgba(30, 42, 68, 0.55)"
          strokeWidth="0.2"
        />
        <line
          x1="0"
          y1="-1"
          x2="0"
          y2="1"
          stroke="rgba(30, 42, 68, 0.55)"
          strokeWidth="0.2"
        />
        <line
          x1="14"
          y1="-1"
          x2="14"
          y2="1"
          stroke="rgba(30, 42, 68, 0.55)"
          strokeWidth="0.2"
        />
        <text
          x="7"
          y="3.4"
          fontSize="1.2"
          fontFamily="ui-monospace, monospace"
          textAnchor="middle"
          fill="rgba(30, 42, 68, 0.6)"
        >
          ~ 1 cohort
        </text>
      </g>

      {/* drawn-from-life mark */}
      <text
        x="92"
        y="92"
        fontSize="1.4"
        fontFamily="serif"
        fontStyle="italic"
        textAnchor="end"
        fill="rgba(30, 42, 68, 0.5)"
      >
        ad vivum
      </text>
    </svg>
  );
}
