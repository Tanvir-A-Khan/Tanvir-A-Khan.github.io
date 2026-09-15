import { Link } from 'react-router-dom'
import { FEATURED_PROJECT, IN_DEVELOPMENT_PROJECTS, SHIPPED_PROJECTS } from '../../data/work'
import { useInView } from '../../hooks/useInView'
import { glass, nodeDot } from '../../styles/recipes'

function StackChip({ label, small = false }: { label: string; small?: boolean }) {
  return (
    <span
      className={`rounded-[5px] border border-border-2 bg-card font-mono text-ink2 transition-all duration-150 hover:border-border-hi hover:text-ink ${
        small ? 'px-[9px] py-1 text-[10.5px]' : 'px-2.5 py-[5px] text-[11px]'
      }`}
    >
      {label}
    </span>
  )
}

export default function WorkSection() {
  const { ref, inView } = useInView<HTMLDivElement>()
  let cardIndex = 0

  return (
    <section id="work" aria-labelledby="work-h" className="border-t border-line py-[clamp(48px,9vh,96px)]">
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
        02 — Selected work
      </p>
      <h2 id="work-h" className="mb-3 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        Products I designed, built and shipped
      </h2>
      <p className="mb-11 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink3">
        Work from IBM and Cognitus alongside products I built end to end — architecture,
        interface, release pipeline and all.
      </p>

      <div ref={ref} className="grid gap-3.5">
        <Link
          to={`/case-studies#${FEATURED_PROJECT.slug}`}
          className={`group relative grid gap-6 rounded-2xl border border-border p-[clamp(26px,4vw,44px)] text-inherit transition-all duration-300 ease-out before:absolute before:-top-px before:-left-px before:h-[17px] before:w-[17px] before:rounded-tl-2xl before:border-t-2 before:border-l-2 before:border-retro before:content-[''] after:absolute after:-right-px after:-bottom-px after:h-[17px] after:w-[17px] after:rounded-br-2xl after:border-r-2 after:border-b-2 after:border-retro after:content-[''] hover:-translate-y-[3px] hover:border-accent hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] active:translate-y-[-1px] active:scale-[0.997] ${glass(
            'panel',
          )} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: inView ? `${cardIndex++ * 70}ms` : '0ms' }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-[11px] tracking-[0.1em] text-ink4">FEATURED PROJECT</span>
            <span className="inline-flex items-center gap-[7px] font-mono text-[11px] text-accent">
              <span className={nodeDot} />
              {FEATURED_PROJECT.statusLabel}
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-[clamp(20px,4vw,48px)]">
            <div>
              <h3 className="mb-3.5 text-[clamp(30px,4vw,44px)] font-medium tracking-[-0.03em] text-ink">
                {FEATURED_PROJECT.name}
              </h3>
              <p className="mb-6 max-w-[40ch] text-[16.5px] leading-[1.65] text-ink2">
                {FEATURED_PROJECT.description}
              </p>
              <span className="inline-flex items-center gap-[9px] text-[15px] text-accent">
                Explore case study <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className="grid gap-5">
              <div>
                <p className="mb-2.5 font-mono text-[10px] tracking-[0.08em] text-ink4">STACK</p>
                <div className="flex flex-wrap gap-1.5">
                  {FEATURED_PROJECT.stack.map((s) => (
                    <StackChip key={s} label={s} />
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2.5 font-mono text-[10px] tracking-[0.08em] text-ink4">SCOPE</p>
                <p className="text-[14.5px] leading-[1.7] text-ink3">{FEATURED_PROJECT.scope}</p>
              </div>
            </div>
          </div>
        </Link>

        <p className="mt-[22px] font-mono text-[10.5px] tracking-[0.1em] text-ink4">ALSO BUILT</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
          {SHIPPED_PROJECTS.map((p) => {
            const cardClasses = `grid grid-cols-[minmax(0,1fr)] gap-5 rounded-2xl border border-line p-[clamp(22px,3vw,32px)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-border-hi hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] active:translate-y-[-1px] active:scale-[0.994] ${glass(
              'card',
            )} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`
            const style = { transitionDelay: inView ? `${cardIndex++ * 70}ms` : '0ms' }

            const body = (
              <>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-ink4">{p.index}</span>
                  <span className="font-mono text-[11px] text-ink3">SHIPPED</span>
                </div>
                <div className="grid items-start gap-[18px]">
                  <div>
                    <h3 className="mb-2.5 text-[clamp(22px,2.6vw,29px)] font-medium tracking-[-0.02em] text-ink">
                      {p.name}
                    </h3>
                    <p className="max-w-[38ch] text-[15px] leading-[1.65] text-ink3">{p.description}</p>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-[10px] tracking-[0.08em] text-ink4">STACK</p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <StackChip key={s} label={s} small />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <Link
                        to={`/case-studies#${p.slug}`}
                        className="inline-flex items-center gap-2 text-[14px] text-accent hover:text-accent-hi"
                      >
                        Explore case study <span aria-hidden="true">→</span>
                      </Link>
                      {p.externalUrl && (
                        <a
                          href={p.externalUrl}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1.5 text-[14px] text-ink3 transition-colors hover:text-ink"
                        >
                          {p.externalLabel} <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )

            // A card with an external link can't be a single full-card <Link>
            // (nested anchors are invalid HTML), so it renders as a plain div
            // with its own two link affordances instead.
            return p.externalUrl ? (
              <div key={p.slug} className={cardClasses} style={style}>
                {body}
              </div>
            ) : (
              <Link key={p.slug} to={`/case-studies#${p.slug}`} className={`text-inherit ${cardClasses}`} style={style}>
                {body}
              </Link>
            )
          })}
        </div>

        {IN_DEVELOPMENT_PROJECTS.map((p) => (
          <div
            key={p.name}
            className={`grid grid-cols-[minmax(0,1fr)] gap-5 rounded-2xl border border-line p-[clamp(22px,3vw,32px)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-border-hi hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] ${glass(
              'card',
            )} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: inView ? `${cardIndex++ * 70}ms` : '0ms' }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[11px] tracking-[0.1em] text-ink4">{p.index}</span>
              <span className="font-mono text-[11px] text-ink3">IN DEVELOPMENT</span>
            </div>
            <div className="grid items-start gap-[18px]">
              <div>
                <h3 className="mb-2.5 text-[clamp(22px,2.6vw,29px)] font-medium tracking-[-0.02em] text-ink">
                  {p.name}
                </h3>
                <p className="max-w-[38ch] text-[15px] leading-[1.65] text-ink3">{p.description}</p>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] tracking-[0.08em] text-ink4">STACK</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <StackChip key={s} label={s} small />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
