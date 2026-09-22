import { AnimatePresence, MotionConfig } from 'framer-motion'
import type { ReactElement } from 'react'
import { useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Background from '../components/Background'
import CaseStudiesHeader from '../components/casestudies/CaseStudiesHeader'
import JachaiArticle from '../components/casestudies/JachaiArticle'
import LambdaXArticle from '../components/casestudies/LambdaXArticle'
import MaafCraftArticle from '../components/casestudies/MaafCraftArticle'
import Tabs from '../components/casestudies/Tabs'
import TasbeehArticle from '../components/casestudies/TasbeehArticle'
import { PROJECTS } from '../data/caseStudies'
import { useTheme } from '../hooks/useTheme'

const ARTICLES: Record<string, () => ReactElement> = {
  lambdax: LambdaXArticle,
  maafcraft: MaafCraftArticle,
  jachai: JachaiArticle,
  'tasbeeh-noor': TasbeehArticle,
}

export default function CaseStudies() {
  const { toggleTheme, themeGlyph, themeLabel } = useTheme()
  const location = useLocation()

  const activeId = useMemo(() => {
    const id = location.hash.replace('#', '')
    return PROJECTS.some((p) => p.id === id) ? id : 'lambdax'
  }, [location.hash])

  useEffect(() => {
    document.title = 'Case Studies — Tanvir Ahmed Khan'
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeId])

  const activeIndex = Math.max(0, PROJECTS.findIndex((p) => p.id === activeId))
  const next = PROJECTS[(activeIndex + 1) % PROJECTS.length]
  const ActiveArticle = ARTICLES[activeId]

  return (
    <div className="min-h-screen animate-page-in bg-bg text-ink">
      <Background />

      <CaseStudiesHeader themeGlyph={themeGlyph} themeLabel={themeLabel} onToggleTheme={toggleTheme} />

      <main className="relative z-[1] mx-auto max-w-[900px] px-[clamp(20px,5vw,48px)]">
        <Tabs active={activeId} />

        {/* Sequential fade — the outgoing case study (image, hero, all its
            details) fades out, then the new one fades/slides in. A true
            simultaneous crossfade would need the exiting article positioned
            absolutely, which corrupts layout for long, variable-height text. */}
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait">
            <ActiveArticle key={activeId} />
          </AnimatePresence>
        </MotionConfig>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 pb-12">
          <Link to="/" className="text-[14.5px] text-ink3 transition-colors hover:text-accent">
            ← Back to portfolio
          </Link>
          <Link
            to={`/case-studies#${next.id}`}
            className="inline-flex items-center gap-[9px] text-[14.5px] text-accent"
          >
            Next: {next.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
