import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/caseStudies'

export default function Tabs({ active }: { active: string }) {
  return (
    <nav aria-label="Case studies" className="flex flex-wrap gap-2 pt-7">
      {PROJECTS.map((tab) => {
        const isActive = tab.id === active
        return (
          <Link
            key={tab.id}
            to={`/case-studies#${tab.id}`}
            className="rounded-full border px-3.5 py-[7px] font-mono text-[11.5px] tracking-[0.04em] transition-all duration-200"
            style={{
              borderColor: isActive ? 'var(--accent)' : 'var(--border2)',
              background: isActive ? 'var(--accent)' : 'transparent',
              color: isActive ? 'var(--onAccent)' : 'var(--ink3)',
            }}
          >
            {tab.label}
          </Link>
        )
      })}
    </nav>
  )
}
