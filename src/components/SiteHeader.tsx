import { useEffect, useState } from 'react'
import { nodeDot } from '../styles/recipes'

const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Experience' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'notes', label: 'Notes' },
]

interface SiteHeaderProps {
  activeNav: string
  themeGlyph: string
  themeLabel: string
  onToggleTheme: () => void
  onOpenOverview: () => void
}

export default function SiteHeader({
  activeNav,
  themeGlyph,
  themeLabel,
  onToggleTheme,
  onOpenOverview,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  // A jump to a section, or resizing past the mobile breakpoint, should
  // always close the menu rather than leave it stuck open behind new content.
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-header-bg backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[18px]">
        <a href="#top" className="font-martian text-[13px] font-semibold tracking-[-0.04em] text-ink">
          TAK<span className="text-accent">.</span>
        </a>

        <nav
          aria-label="Sections"
          className="hidden items-center gap-[clamp(14px,2.4vw,30px)] text-[13.5px] text-ink3 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = activeNav === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                data-nav={link.id}
                className="relative py-1 transition-colors duration-300 hover:text-ink"
                style={{ color: active ? 'var(--accent)' : 'var(--ink3)' }}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-[3px] h-px origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out"
                  style={{ transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenOverview}
            title="Quick overview for recruiters"
            className="hidden items-center gap-[7px] rounded-full border border-border-2 bg-card px-3 py-[7px] font-mono text-[11px] tracking-[0.06em] text-ink3 backdrop-blur-[14px] transition-all duration-200 hover:border-accent hover:text-accent md:flex"
          >
            <span className={nodeDot} />
            OVERVIEW
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="group flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border-2 bg-card p-0 text-ink3 backdrop-blur-[14px] transition-all duration-200 hover:border-accent hover:bg-hover hover:text-accent"
          >
            <span key={themeGlyph} aria-hidden="true" className="animate-spin-in text-[13px] leading-none">
              {themeGlyph}
            </span>
          </button>
          <a
            href="#contact"
            className="hidden rounded-full border border-border-2 px-[15px] py-2 text-[13px] text-ink transition-all duration-200 hover:border-accent hover:bg-accent hover:text-on-accent md:inline-block"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-8 w-8 flex-none flex-col items-center justify-center gap-[5px] rounded-full border border-border-2 bg-card p-0 transition-all duration-200 hover:border-accent md:hidden"
          >
            <span
              aria-hidden="true"
              className="block h-px w-4 bg-ink3 transition-transform duration-300 ease-out"
              style={{ transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }}
            />
            <span
              aria-hidden="true"
              className="block h-px w-4 bg-ink3 transition-transform duration-300 ease-out"
              style={{ transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out md:hidden"
        style={{ gridTemplateRows: menuOpen ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden border-t border-line">
          <nav
            aria-label="Sections"
            className="flex flex-col gap-1 px-[clamp(20px,5vw,56px)] py-4 text-[15px]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 transition-colors duration-200"
                style={{ color: activeNav === link.id ? 'var(--accent)' : 'var(--ink2)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-2.5 px-[clamp(20px,5vw,56px)] pb-5">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onOpenOverview()
              }}
              className="flex items-center gap-[7px] rounded-full border border-border-2 bg-card px-3 py-[7px] font-mono text-[11px] tracking-[0.06em] text-ink3"
            >
              <span className={nodeDot} />
              OVERVIEW
            </button>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-border-2 px-[15px] py-2 text-[13px] text-ink"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
