import type { ReactNode } from 'react'
import { Fragment } from 'react'
import { glass } from '../../styles/recipes'

export interface MetaItem {
  label: string
  value: string
  accent?: boolean
  href?: string
}

export function CaseStudyHero({
  kicker,
  title,
  description,
  meta,
}: {
  kicker: string
  title: string
  description: string
  meta: MetaItem[]
}) {
  return (
    <>
      <p className="mb-[18px] font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">{kicker}</p>
      <h1 className="mb-[18px] text-[clamp(34px,6vw,60px)] leading-[1.04] font-medium tracking-[-0.035em]">
        {title}
      </h1>
      <p className="mb-8 max-w-[48ch] text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-ink2">{description}</p>
      <dl className="mb-[clamp(40px,7vh,72px)] grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-5 border-y border-line py-[22px]">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="mb-2 font-mono text-[10px] tracking-[0.1em] text-ink4">{m.label}</dt>
            <dd className="text-[14.5px]" style={{ color: m.accent ? 'var(--accent)' : 'var(--ink2)' }}>
              {m.href ? (
                <a
                  href={m.href}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-[color-mix(in_srgb,currentColor_35%,transparent)] underline-offset-2 transition-colors hover:text-accent-hi"
                  style={{ color: 'inherit' }}
                >
                  {m.value}
                </a>
              ) : (
                m.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </>
  )
}

export function CaseStudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-[clamp(36px,6vh,64px)]">
      <h2 className="mb-4 text-[clamp(20px,2.2vw,26px)] font-medium tracking-[-0.02em]">{title}</h2>
      {children}
    </section>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="max-w-[66ch] text-[16px] leading-[1.75] text-ink2">{children}</p>
}

export function SystemDiagram({ children }: { children: ReactNode }) {
  return (
    <div className={`rounded-xl border border-line p-[clamp(20px,3vw,32px)] ${glass('panel')}`}>{children}</div>
  )
}

export function ChallengesGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line">{children}</div>
  )
}

export function ChallengeCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className={`p-[22px_24px] transition-all duration-200 hover:-translate-y-0.5 hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] ${glass(
        'card',
      )}`}
    >
      <p className="mb-2 font-mono text-[11px] text-accent">{label}</p>
      <p className="max-w-[62ch] text-[15px] leading-[1.7] text-ink3">{children}</p>
    </div>
  )
}

export function TechCategory({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 border-b border-line pb-2.5 font-mono text-[10px] tracking-[0.1em] text-ink4">{label}</p>
      <p className="text-[14.5px] leading-[1.95] text-ink2">
        {items.map((item, i) => (
          <Fragment key={item}>
            {item}
            {i < items.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
    </div>
  )
}

export function WhatILearned({ children }: { children: ReactNode }) {
  return (
    <section
      className={`mb-[clamp(36px,6vh,64px)] rounded-r-xl border-l border-accent p-[clamp(24px,3vw,32px)] ${glass(
        'panel',
      )}`}
    >
      <h2 className="mb-4 text-[clamp(20px,2.2vw,26px)] font-medium tracking-[-0.02em]">What I learned</h2>
      <p className="max-w-[64ch] text-[16px] leading-[1.75] text-ink2">{children}</p>
    </section>
  )
}

export function Article({ children }: { children: ReactNode }) {
  return <article className="animate-fadeup pt-[clamp(40px,8vh,80px)]">{children}</article>
}
