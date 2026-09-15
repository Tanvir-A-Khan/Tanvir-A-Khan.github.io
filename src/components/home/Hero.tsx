import { SYSTEMS } from '../../data/systems'
import { glass, nodeDot } from '../../styles/recipes'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-h"
      className="py-[clamp(56px,11vh,120px)] pb-[clamp(48px,9vh,100px)]"
    >
      <p className="mb-7 flex items-center gap-[9px] font-martian text-[10.5px] uppercase tracking-[0.02em] text-ink3">
        <span className={nodeDot} />
        Software Engineer &middot; Full-Stack &amp; Mobile &middot; Bangladesh
      </p>
      <h1
        id="hero-h"
        className="mb-[26px] max-w-[17ch] text-[clamp(38px,6.6vw,76px)] leading-[1.02] font-medium tracking-[-0.035em]"
        style={{ textWrap: 'balance' }}
      >
        Three years shipping enterprise software, and my own products alongside it.
      </h1>
      <p
        className="mb-10 max-w-[54ch] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-ink2"
        style={{ textWrap: 'pretty' }}
      >
        I'm Tanvir Ahmed Khan — a software engineer building contract-management software at IBM
        in React and TypeScript, with backend depth in Java/Spring Boot and Python/FastAPI, and
        mobile apps I design, build and release myself.
      </p>

      <div className="mb-10 flex flex-wrap items-center gap-[clamp(16px,3vw,34px)] border-y border-line py-5">
        <span className="font-martian text-[15px] tracking-[-0.03em] text-ink">IBM</span>
        <span className="font-martian text-[15px] tracking-[-0.03em] text-ink2">COGNITUS</span>
        <span className="font-martian text-[15px] tracking-[-0.03em] text-ink2">T-TECH</span>
        <span className="font-martian text-[15px] tracking-[-0.03em] text-ink2">KAZ SOFTWARE</span>
        <span className="font-martian text-[15px] tracking-[-0.03em] text-ink2">ROKOMARI</span>
      </div>

      <div className="mb-[clamp(48px,8vh,88px)] flex flex-wrap gap-3">
        <a
          href="#work"
          className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-[22px] py-[13px] text-[14.5px] font-medium text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:gap-4 hover:bg-accent-up hover:shadow-[var(--shadowHi)] active:translate-y-0"
        >
          Explore my work <span aria-hidden="true">→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-lg border border-border-2 px-[22px] py-[13px] text-[14.5px] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-hover hover:text-accent active:translate-y-0"
        >
          Get in touch
        </a>
      </div>

      <div
        className="relative rounded-xl border border-line p-[clamp(22px,3vw,32px)] before:absolute before:-top-px before:-left-px before:h-[17px] before:w-[17px] before:rounded-tl-xl before:border-t-2 before:border-l-2 before:border-retro before:content-[''] after:absolute after:-right-px after:-bottom-px after:h-[17px] after:w-[17px] after:rounded-br-xl after:border-r-2 after:border-b-2 after:border-retro after:content-['']"
      >
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
            Shipped in LambdaX
          </span>
          <span className="font-mono text-[10.5px] text-ink4">
            enterprise contract management &middot; react + typescript
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-2">
          {SYSTEMS.map((sys, i) => (
            <div
              key={sys.name}
              className={`${glass('card')} animate-fadeup rounded-[9px] border border-border p-[16px_18px] opacity-0 transition-[transform,background-color,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-border-hi hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] active:translate-y-[-1px] active:scale-[0.994]`}
              style={{ animationDelay: `${300 + i * 60}ms` }}
            >
              <p className="mb-1.5 text-[15px] font-medium text-ink">{sys.name}</p>
              <p className="text-[13px] leading-[1.5] text-ink3">{sys.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
