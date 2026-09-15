import { Link } from 'react-router-dom'

interface CaseStudiesHeaderProps {
  themeGlyph: string
  themeLabel: string
  onToggleTheme: () => void
}

export default function CaseStudiesHeader({ themeGlyph, themeLabel, onToggleTheme }: CaseStudiesHeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-line bg-header-bg backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[900px] items-center justify-between gap-5 px-[clamp(20px,5vw,48px)] py-[18px]">
        <Link
          to="/"
          className="inline-flex items-center gap-[9px] text-[13.5px] text-ink3 transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-2 bg-card p-0 text-ink3 backdrop-blur-[14px] transition-all duration-200 hover:border-accent hover:bg-hover hover:text-accent"
          >
            <span key={themeGlyph} aria-hidden="true" className="animate-spin-in text-[13px] leading-none">
              {themeGlyph}
            </span>
          </button>
          <Link to="/" className="font-martian text-[13px] font-semibold tracking-[-0.04em] text-ink">
            TAK<span className="text-accent">.</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
