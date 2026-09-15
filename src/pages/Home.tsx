import { useEffect, useState } from 'react'
import Background from '../components/Background'
import BeyondSection from '../components/home/BeyondSection'
import ContactSection from '../components/home/ContactSection'
import EngineeringSection from '../components/home/EngineeringSection'
import Footer from '../components/home/Footer'
import Hero from '../components/home/Hero'
import JourneySection from '../components/home/JourneySection'
import MapSection from '../components/home/MapSection'
import NotesSection from '../components/home/NotesSection'
import NowSection from '../components/home/NowSection'
import OverviewModal from '../components/home/OverviewModal'
import StackSection from '../components/home/StackSection'
import WorkSection from '../components/home/WorkSection'
import Reveal from '../components/Reveal'
import SiteHeader from '../components/SiteHeader'
import { useTheme } from '../hooks/useTheme'

const OBSERVED_SECTIONS = ['work', 'journey', 'engineering', 'stack', 'map', 'notes']
const NAV_TARGET: Record<string, string> = {
  work: 'work',
  journey: 'journey',
  engineering: 'engineering',
  stack: 'stack',
  map: 'stack',
  notes: 'notes',
}

export default function Home() {
  const { toggleTheme, themeGlyph, themeLabel } = useTheme()
  const [overviewOpen, setOverviewOpen] = useState(false)

  useEffect(() => {
    document.title = 'Tanvir Ahmed Khan — Software Engineer'
  }, [])
  const [activeNav, setActiveNav] = useState('work')
  const [trace, setTrace] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setTrace(max > 0 ? Math.min(1, h.scrollTop / max) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOverviewOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = NAV_TARGET[entry.target.id]
          if (target) setActiveNav(target)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen animate-page-in bg-bg text-ink">
      <Background />

      <SiteHeader
        activeNav={activeNav}
        themeGlyph={themeGlyph}
        themeLabel={themeLabel}
        onToggleTheme={toggleTheme}
        onOpenOverview={() => setOverviewOpen(true)}
      />

      <main className="relative z-[1] mx-auto max-w-[1180px] px-[clamp(20px,5vw,56px)]">
        <div id="top" className="grid grid-cols-[40px_minmax(0,1fr)] gap-0">
          <div aria-hidden="true" className="relative">
            <div className="sticky top-24 ml-1 h-[calc(100vh-140px)] w-px bg-line">
              <div
                className="absolute inset-x-auto inset-y-0 left-0 w-px origin-top"
                style={{
                  background: 'linear-gradient(180deg, var(--accent), var(--shape2))',
                  height: `${(trace * 100).toFixed(2)}%`,
                }}
              />
            </div>
          </div>

          <div className="min-w-0">
            <Hero />
            <Reveal>
              <NowSection />
            </Reveal>
            {/* Work, Engineering and Notes stagger their own cards in, so they
                skip the block-level Reveal to avoid double-animating. */}
            <WorkSection />
            <Reveal>
              <JourneySection />
            </Reveal>
            <EngineeringSection />
            <Reveal>
              <StackSection />
            </Reveal>
            <Reveal>
              <MapSection />
            </Reveal>
            <NotesSection />
            <Reveal>
              <BeyondSection />
            </Reveal>
            <Reveal>
              <ContactSection />
            </Reveal>
            <Footer />
          </div>
        </div>

        <OverviewModal open={overviewOpen} onClose={() => setOverviewOpen(false)} />
      </main>
    </div>
  )
}
