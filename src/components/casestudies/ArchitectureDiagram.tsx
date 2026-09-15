interface ArchitectureDiagramProps {
  ariaLabel: string
  viewBoxHeight: number
  rectX: number
  rectWidth: number
  rows: string[]
  highlightIndex?: number
}

export default function ArchitectureDiagram({
  ariaLabel,
  viewBoxHeight,
  rectX,
  rectWidth,
  rows,
  highlightIndex = 1,
}: ArchitectureDiagramProps) {
  const centerX = rectX + rectWidth / 2
  const rowY = (i: number) => 16 + i * 84

  return (
    <svg
      viewBox={`0 0 320 ${viewBoxHeight}`}
      role="img"
      aria-label={ariaLabel}
      className="mx-auto block h-auto w-full max-w-[320px]"
    >
      <line x1={centerX} y1="34" x2={centerX} y2={viewBoxHeight - 34} stroke="var(--border)" strokeWidth="1" />
      <line
        x1={centerX}
        y1="34"
        x2={centerX}
        y2={viewBoxHeight - 34}
        stroke="var(--accent)"
        strokeWidth="1.25"
        strokeDasharray="26 150"
        strokeLinecap="round"
        className="animate-traceflow"
      />
      <g fontFamily="Geist Mono, monospace" fontSize="12" textAnchor="middle">
        <g fill="var(--card)" stroke="var(--border2)">
          {rows.map((_, i) => (
            <rect key={i} x={rectX} y={rowY(i)} width={rectWidth} height="36" rx="8" />
          ))}
        </g>
        <g fill="var(--ink2)">
          {rows.map((label, i) => (
            <text key={label} x={centerX} y={rowY(i) + 23} fill={i === highlightIndex ? 'var(--ink)' : undefined}>
              {label}
            </text>
          ))}
        </g>
      </g>
    </svg>
  )
}
