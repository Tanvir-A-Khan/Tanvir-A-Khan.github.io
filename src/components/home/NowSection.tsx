import { glass, nodeDot } from '../../styles/recipes'

const FOCUS_AREAS = ['React', 'TypeScript', 'Enterprise UI', 'Contract management', 'Distributed delivery']

export default function NowSection() {
  return (
    <section id="now" aria-labelledby="now-h" className="border-t border-line py-[clamp(40px,7vh,72px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(24px,4vw,56px)]">
        <div>
          <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
            01 — Currently
          </p>
          <h2 id="now-h" className="mb-3.5 text-[clamp(26px,3vw,34px)] leading-[1.15] font-medium tracking-[-0.025em]">
            Frontend engineering, at enterprise scale
          </h2>
          <p className="max-w-[40ch] text-[15.5px] leading-[1.7] text-ink3">
            Junior Software Engineer at IBM since August 2026, working on LambdaX — an enterprise
            agreement and contract management platform. Before that, nearly two years on the same
            product at Cognitus.
          </p>
        </div>
        <div className={`${glass('panel')} rounded-xl p-[clamp(20px,2.6vw,28px)]`}>
          <p className="mb-[18px] flex items-center gap-2 font-mono text-[10.5px] tracking-[0.1em] text-accent">
            <span className={nodeDot} />
            NOW
          </p>
          <p className="mb-2 text-[17px] font-medium text-ink">IBM &middot; Junior Software Engineer</p>
          <p className="mb-[22px] text-[14.5px] leading-[1.7] text-ink3">
            Frontend development on LambdaX in the lax-web-portal codebase: shipping reviewed
            functionality and resolving production defects with a distributed team across US and
            European timezones.
          </p>
          <p className="mb-2.5 font-mono text-[10.5px] tracking-[0.08em] text-ink4">FOCUS AREAS</p>
          <div className="flex flex-wrap gap-[7px]">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-[5px] border border-transparent bg-chip px-2.5 py-[5px] font-mono text-[11px] text-ink2 transition-all duration-150 hover:border-border-hi hover:bg-hover hover:text-ink"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
