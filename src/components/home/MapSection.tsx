import { useState } from 'react'
import { glass } from '../../styles/recipes'

const TRACE_PATH = 'M380 44 L380 108 L200 152 L200 232 L380 292 L380 336'

const NODES = [
  { key: 'user', x: 380, y: 34, label: 'USER EXPERIENCE', size: 13, fill: 'var(--ink)' },
  { key: 'frontend', x: 380, y: 104, label: 'FRONTEND', size: 13, fill: 'var(--ink2)' },
  { key: 'react', x: 200, y: 164, label: 'REACT', size: 13, fill: 'var(--ink2)' },
  { key: 'typescript', x: 560, y: 164, label: 'TYPESCRIPT', size: 13, fill: 'var(--ink2)' },
  { key: 'nextjs', x: 200, y: 228, label: 'NEXT.JS', size: 12, fill: 'var(--ink3)' },
  { key: 'application', x: 560, y: 228, label: 'APPLICATION', size: 12, fill: 'var(--ink3)' },
  { key: 'architecture', x: 380, y: 288, label: 'ARCHITECTURE', size: 13, fill: 'var(--ink2)' },
  { key: 'api', x: 200, y: 348, label: 'API · SPRING BOOT', size: 12, fill: 'var(--ink3)' },
  { key: 'data', x: 560, y: 348, label: 'DATA · POSTGRESQL', size: 12, fill: 'var(--ink3)' },
  { key: 'stores', x: 560, y: 384, label: 'MONGODB · MYSQL', size: 11, fill: 'var(--ink4)' },
] as const

const NODE_CIRCLES = [
  { key: 'user', cx: 380, cy: 44, origin: true },
  { key: 'frontend', cx: 380, cy: 114, origin: false },
  { key: 'react', cx: 200, cy: 174, origin: false },
  { key: 'typescript', cx: 560, cy: 174, origin: false },
  { key: 'architecture', cx: 380, cy: 298, origin: false },
] as const

const FLOW_DOTS = [
  { delay: '0s', duration: '4.6s' },
  { delay: '-1.53s', duration: '4.6s' },
  { delay: '-3.07s', duration: '4.6s' },
]

export default function MapSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="map" aria-labelledby="map-h" className="border-t border-line py-[clamp(48px,9vh,96px)]">
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
        06 — The engineering map
      </p>
      <h2 id="map-h" className="mb-3 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        Not a list of tools. A system.
      </h2>
      <p className="mb-9 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink3">
        How the parts I work with connect, from the interface down to the data. Hover a node to
        trace it.
      </p>

      <div className={`overflow-x-auto rounded-xl border border-line p-[clamp(18px,3vw,32px)] ${glass('panel')}`}>
        <svg
          viewBox="0 0 760 420"
          role="img"
          aria-label="Diagram: user experience connects to frontend, which branches into React and TypeScript, leading to Next.js and application architecture, which branches into API with Node.js and data with MongoDB and PostgreSQL."
          className="block h-auto w-full min-w-[560px]"
        >
          <defs>
            <filter id="map-node-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g stroke="var(--border)" strokeWidth="1" fill="none">
            <path d="M380 44 L380 92" />
            <path d="M380 108 L200 152 M380 108 L560 152" />
            <path d="M200 168 L200 216 M560 168 L560 216" />
            <path d="M200 232 L380 276 M560 232 L380 276" />
            <path d="M380 292 L200 336 M380 292 L560 336" />
          </g>

          <path
            d={TRACE_PATH}
            stroke="var(--accent)"
            strokeWidth="1.25"
            fill="none"
            strokeDasharray="30 160"
            strokeLinecap="round"
            opacity="0.55"
            style={{ animation: 'traceflow 4.6s linear infinite' }}
          />

          {/* Small pulses of "data" travelling the same route the trace line draws. */}
          {FLOW_DOTS.map((dot, i) => (
            <circle key={i} r="2.6" fill="var(--accent)" filter="url(#map-node-glow)">
              <animateMotion path={TRACE_PATH} dur={dot.duration} begin={dot.delay} repeatCount="indefinite" />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.08;0.92;1"
                dur={dot.duration}
                begin={dot.delay}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          <g fontFamily="Geist Mono, monospace" textAnchor="middle">
            {NODES.map((n) => {
              const active = hovered === n.key
              return (
                <g
                  key={n.key}
                  onMouseEnter={() => setHovered(n.key)}
                  onMouseLeave={() => setHovered((h) => (h === n.key ? null : h))}
                  style={{ cursor: 'default' }}
                >
                  {/* Generous invisible hit area so the text is easy to hover. */}
                  <rect
                    x={n.x - 90}
                    y={n.y - 14}
                    width="180"
                    height="24"
                    fill="transparent"
                  />
                  <text
                    x={n.x}
                    y={n.y}
                    fontSize={n.size}
                    fill={active ? 'var(--accentHi)' : n.fill}
                    style={{ transition: 'fill 0.2s ease' }}
                  >
                    {n.label}
                  </text>
                </g>
              )
            })}
          </g>

          <g fill="var(--bg)" stroke="var(--stroke)">
            {NODE_CIRCLES.map((c) => {
              const active = hovered === c.key
              return (
                <circle
                  key={c.key}
                  cx={c.cx}
                  cy={c.cy}
                  r={active ? 5.5 : 4}
                  stroke={c.origin || active ? 'var(--accent)' : 'var(--stroke)'}
                  fill={c.origin || active ? 'var(--accent)' : 'var(--bg)'}
                  filter={c.origin || active ? 'url(#map-node-glow)' : undefined}
                  style={{
                    transformBox: 'fill-box',
                    transformOrigin: 'center',
                    transition: 'r 0.2s ease, fill 0.2s ease, stroke 0.2s ease',
                    ...(c.origin ? { animation: 'nodepulse 2.6s ease-in-out infinite' } : undefined),
                  }}
                />
              )
            })}
          </g>

          <line x1="560" y1="356" x2="560" y2="372" stroke="var(--border)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  )
}
