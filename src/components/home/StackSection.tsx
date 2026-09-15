import { useState } from 'react'
import { STACK } from '../../data/stack'
import { glass } from '../../styles/recipes'

export default function StackSection() {
  const [active, setActive] = useState<[string, string] | null>(null)

  return (
    <section id="stack" aria-labelledby="stack-h" className="border-t border-line py-[clamp(48px,9vh,96px)]">
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
        05 — Technology ecosystem
      </p>
      <h2 id="stack-h" className="mb-3 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        What I work with, and why
      </h2>
      <p className="mb-8 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink3">
        Hover or focus a technology to see how I've used it.
      </p>

      <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-[clamp(20px,3vw,36px)]">
        {STACK.map((group) => (
          <div key={group.label}>
            <p className="mb-4 border-b border-line pb-3 font-mono text-[10.5px] tracking-[0.1em] text-ink4">
              {group.label}
            </p>
            <div className="flex flex-col items-start gap-0.5">
              {group.items.map(([name, note]) => (
                <button
                  key={name}
                  type="button"
                  onMouseEnter={() => setActive([name, note])}
                  onFocus={() => setActive([name, note])}
                  className="rounded-md border-0 bg-transparent py-[5px] text-left text-[15px] transition-all duration-150 hover:translate-x-[3px] hover:text-accent"
                  style={{ color: active?.[0] === name ? 'var(--accent)' : 'var(--ink2)' }}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`min-h-24 rounded-[10px] border border-line p-[20px_22px] ${glass('panel')}`}>
        <div key={active?.[0] ?? 'default'} className="animate-fadeup">
          <p className="mb-2 font-mono text-[11px] tracking-[0.08em] text-accent">
            {active ? active[0].toUpperCase() : 'SELECT A TECHNOLOGY'}
          </p>
          <p className="max-w-[60ch] text-[14.5px] leading-[1.7] text-ink2">
            {active
              ? active[1]
              : "Each of these is here because I've shipped something with it, not because it belongs on a list."}
          </p>
        </div>
      </div>
    </section>
  )
}
