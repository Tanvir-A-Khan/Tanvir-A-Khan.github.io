import { useState } from 'react'
import { ROLES } from '../../data/roles'

export default function JourneySection() {
  const [expanded, setExpanded] = useState<string | null>('ibm')
  const reversed = [...ROLES].reverse()

  return (
    <section
      id="journey"
      aria-labelledby="journey-h"
      className="border-t border-line py-[clamp(48px,9vh,96px)]"
    >
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
        03 — Engineering journey
      </p>
      <h2 id="journey-h" className="mb-3 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        Backend foundations, frontend depth
      </h2>
      <p className="mb-11 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink3">
        Nearly three years across Java services, Angular dashboards, large React applications and
        my own contracting brand. Select a role to expand it.
      </p>

      <div className="grid">
        <div className="grid grid-cols-[84px_minmax(0,1fr)] gap-[clamp(12px,2.5vw,28px)] border-t border-line py-[22px]">
          <span className="pt-1 font-mono text-[11.5px] text-accent">NEXT</span>
          <span className="font-martian text-[13px] tracking-[-0.02em] text-ink4">BUILDING WHAT'S NEXT</span>
        </div>

        {reversed.map((role) => {
          const open = expanded === role.key
          return (
            <div
              key={role.key}
              className="grid grid-cols-[84px_minmax(0,1fr)] gap-[clamp(12px,2.5vw,28px)] border-t border-line py-[22px]"
            >
              <span className="pt-1 font-mono text-[11.5px] leading-[1.9] text-ink4">{role.period}</span>
              <div>
                <button
                  type="button"
                  onClick={() => setExpanded((cur) => (cur === role.key ? null : role.key))}
                  aria-expanded={open}
                  className="flex w-full items-baseline justify-between gap-4 border-0 bg-transparent p-0 text-left text-inherit transition-opacity duration-150 hover:opacity-[0.78]"
                >
                  <span>
                    <span
                      className="block font-martian text-[13px] tracking-[-0.02em]"
                      style={{ color: role.current ? 'var(--accent)' : 'var(--ink)' }}
                    >
                      {role.company}
                    </span>
                    <span className="mt-[7px] block text-[15px] text-ink3">{role.title}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-none font-mono text-[16px] text-ink4 transition-transform duration-300 ease-out"
                    style={{ display: 'inline-block', transform: open ? 'rotate(135deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`mt-[18px] rounded-r-lg border-l border-accent bg-panel p-[18px_20px] backdrop-blur-[16px] transition-opacity duration-300 ${
                        open ? 'opacity-100 delay-100' : 'opacity-0'
                      }`}
                    >
                      <p className="mb-4 max-w-[62ch] text-[14.5px] leading-[1.75] text-ink2">{role.detail}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {role.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-[5px] border border-transparent bg-chip px-[9px] py-1 font-mono text-[10.5px] text-ink3 transition-all duration-150 hover:border-border-hi hover:text-ink"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
