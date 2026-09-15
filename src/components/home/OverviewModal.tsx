interface OverviewModalProps {
  open: boolean
  onClose: () => void
}

export default function OverviewModal({ open, onClose }: OverviewModalProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick overview"
      onClick={onClose}
      className="fixed inset-0 z-[90] flex animate-fadeup items-start justify-center overflow-y-auto bg-scrim p-4 py-[clamp(16px,6vh,64px)] backdrop-blur-[6px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[620px] rounded-2xl border border-border-2 bg-panel bg-[image:linear-gradient(160deg,var(--sheen),transparent_62%)] p-[clamp(24px,4vw,38px)] shadow-[var(--shadowHi),inset_0_1px_0_var(--glassHi)] backdrop-blur-[14px] backdrop-saturate-[1.2]"
      >
        <div className="mb-7 flex items-start justify-between gap-5">
          <div>
            <p className="mb-3 font-mono text-[10.5px] tracking-[0.1em] text-accent">QUICK OVERVIEW</p>
            <p className="mb-1.5 font-martian text-[17px] tracking-[-0.03em] text-ink">TANVIR AHMED KHAN</p>
            <p className="text-[14.5px] text-ink3">Software Engineer &middot; Junior Software Engineer at IBM</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close overview"
            className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-border-2 bg-transparent text-[15px] text-ink3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-hover hover:text-accent active:translate-y-0"
          >
            &times;
          </button>
        </div>

        <div className="mb-[26px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 border-y border-line py-[22px]">
          <div>
            <p className="mb-2.5 font-mono text-[10px] tracking-[0.1em] text-ink4">FRONTEND</p>
            <p className="text-[14px] leading-[1.9] text-ink2">
              React
              <br />
              TypeScript
              <br />
              React Native
            </p>
          </div>
          <div>
            <p className="mb-2.5 font-mono text-[10px] tracking-[0.1em] text-ink4">BACKEND</p>
            <p className="text-[14px] leading-[1.9] text-ink2">
              Java / Spring Boot
              <br />
              Python / FastAPI
              <br />
              Node.js
            </p>
          </div>
          <div>
            <p className="mb-2.5 font-mono text-[10px] tracking-[0.1em] text-ink4">DATA</p>
            <p className="text-[14px] leading-[1.9] text-ink2">
              PostgreSQL
              <br />
              MongoDB
              <br />
              LLM integration
            </p>
          </div>
        </div>

        <div className="mb-7">
          <p className="mb-3 font-mono text-[10px] tracking-[0.1em] text-ink4">EXPERIENCE</p>
          <p className="text-[14.5px] leading-[1.8] text-ink2">
            IBM &middot; Cognitus &middot; T-Tech &middot; Kaz Software &middot; Rokomari.com
            <br />
            Enterprise contract management, full-stack platforms and published mobile apps. B.Sc.
            in Computer Science &amp; Engineering, IUBAT — CGPA 3.93 / 4.00. ICPC Asia Dhaka
            regional finalist.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href="/uploads/profile.pdf"
            download
            className="inline-flex items-center gap-[9px] rounded-lg bg-accent px-5 py-3 text-[14px] font-medium text-on-accent transition-all duration-200 hover:bg-accent-up"
          >
            Download resume <span aria-hidden="true">↓</span>
          </a>
          <a
            href="mailto:tanvir.a.khan12@gmail.com"
            className="rounded-lg border border-border-2 px-5 py-3 text-[14px] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-hover hover:text-accent active:translate-y-0"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
