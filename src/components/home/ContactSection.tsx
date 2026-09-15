export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-h" className="border-t border-line py-[clamp(56px,11vh,120px)]">
      <h2
        id="contact-h"
        className="mb-5 max-w-[22ch] text-[clamp(30px,4.6vw,54px)] leading-[1.06] font-medium tracking-[-0.035em]"
        style={{ textWrap: 'balance' }}
      >
        Have an interesting problem to solve?
      </h2>
      <p className="mb-10 max-w-[50ch] text-[16.5px] leading-[1.7] text-ink2">
        I'm always interested in discussing software, product ideas, and interesting engineering
        challenges.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:tanvir.a.khan12@gmail.com"
          className="inline-flex items-center gap-2.5 rounded-lg bg-accent px-6 py-3.5 text-[14.5px] font-medium text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:gap-4 hover:bg-accent-up hover:shadow-[var(--shadowHi)] active:translate-y-0"
        >
          Email me <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://www.linkedin.com/in/tanvir-a-khan"
          target="_blank"
          rel="noopener"
          className="rounded-lg border border-border-2 px-6 py-3.5 text-[14.5px] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-hover hover:text-accent active:translate-y-0"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Tanvir-A-Khan"
          target="_blank"
          rel="noopener"
          className="rounded-lg border border-border-2 px-6 py-3.5 text-[14.5px] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-hover hover:text-accent active:translate-y-0"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
