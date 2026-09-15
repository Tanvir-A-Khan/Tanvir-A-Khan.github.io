const TAGS = [
  'Competitive programming',
  'Game development',
  'Software architecture',
  'IoT and hardware',
  'Teaching and mentoring',
]

export default function BeyondSection() {
  return (
    <section id="beyond" aria-labelledby="beyond-h" className="border-t border-line py-[clamp(48px,9vh,96px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(24px,4vw,56px)]">
        <div>
          <p className="mb-3.5 font-martian text-[9.5px] uppercase tracking-[0.02em] text-retro">
            08 — Beyond work
          </p>
          <h2 id="beyond-h" className="text-[clamp(26px,3vw,34px)] leading-[1.15] font-medium tracking-[-0.025em]">
            Outside the editor
          </h2>
        </div>
        <div>
          <p className="mb-[26px] max-w-[50ch] text-[16px] leading-[1.75] text-ink2">
            ICPC Asia Dhaka Regional finalist and team lead, with 1,200+ problems solved across
            Codeforces and CodeChef. Champion at the BUET CSE FEST '23 hackathon, the IUBAT Hult
            Prize campus round and the IUBAT IT Olympiad. Former Microsoft Learn Student
            Ambassador (Beta) and lead programmer at IUBAT's Innovation and Entrepreneurship
            Center, where I ran Arduino and Raspberry Pi workshops.
          </p>
          <div className="flex flex-wrap gap-[7px]">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-[11px] py-[5px] text-[13px] text-ink3 backdrop-blur-[12px] transition-all duration-200 hover:-translate-y-0.5 hover:border-border-hi hover:text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
