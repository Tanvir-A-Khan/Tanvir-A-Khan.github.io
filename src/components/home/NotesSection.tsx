import { useInView } from '../../hooks/useInView'
import { glass } from '../../styles/recipes'

const NOTES = [
  {
    title: 'How I think about complex frontend state',
    body: 'Where state should live, and the cost of getting it wrong.',
  },
  {
    title: 'Why good UI architecture matters',
    body: 'What a year of enterprise component work teaches you about structure.',
  },
  {
    title: 'Building maintainable React applications',
    body: 'Conventions that hold up when the codebase and the team grow.',
  },
]

export default function NotesSection() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="notes" aria-labelledby="notes-h" className="border-t border-line py-[clamp(48px,9vh,96px)]">
      <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">07 — Notes</p>
      <h2 id="notes-h" className="mb-3 text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-medium tracking-[-0.03em]">
        Notes from the build process
      </h2>
      <p className="mb-9 max-w-[52ch] text-[15.5px] leading-[1.7] text-ink3">
        Writing on architecture decisions, frontend state, and lessons from shipping. First pieces
        are in progress.
      </p>

      <div ref={ref} className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3.5">
        {NOTES.map((note, i) => (
          <article
            key={note.title}
            className={`rounded-xl border border-dashed border-border p-6 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-border-hi ${glass(
              'card',
            )} ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: inView ? `${i * 90}ms` : '0ms' }}
          >
            <p className="mb-4 font-mono text-[10px] tracking-[0.1em] text-ink4">UPCOMING</p>
            <h3 className="mb-2.5 text-[17px] leading-[1.35] font-medium tracking-[-0.015em] text-ink2">
              {note.title}
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-ink3">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
