import { useInView } from '../../hooks/useInView'
import { glass } from '../../styles/recipes'

const METHOD_STEPS = [
  {
    n: '01',
    title: 'Understand the problem',
    body: 'Before writing code, understand the users, constraints, and actual problem.',
  },
  {
    n: '02',
    title: 'Design the system',
    body: 'Think about architecture, data flow, and maintainability.',
  },
  {
    n: '03',
    title: 'Build deliberately',
    body: 'Write understandable, reusable, and maintainable software.',
  },
  {
    n: '04',
    title: 'Polish the experience',
    body: 'Technical correctness is not enough. Software should also feel good to use.',
  },
  {
    n: '05',
    title: 'Keep improving',
    body: 'Engineering is iterative. Measure, learn, improve.',
  },
]

export default function EngineeringSection() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="engineering"
      aria-labelledby="how-h"
      className="border-t border-line py-[clamp(48px,9vh,96px)]"
    >
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">04 — Method</p>
      <h2 id="how-h" className="mb-11 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        How I build software
      </h2>

      <div ref={ref} className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-2">
        {METHOD_STEPS.map((step, i) => (
          <div
            key={step.n}
            className={`rounded-[9px] border border-border p-[clamp(20px,2.4vw,26px)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-border-hi hover:bg-hover hover:shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] active:translate-y-[-1px] active:scale-[0.994] ${glass(
              'card',
            )} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: inView ? `${i * 70}ms` : '0ms' }}
          >
            <p className="mb-[18px] font-mono text-[11px] text-accent">{step.n}</p>
            <h3 className="mb-2.5 text-[17px] font-medium tracking-[-0.015em]">{step.title}</h3>
            <p className="text-[14px] leading-[1.65] text-ink3">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
