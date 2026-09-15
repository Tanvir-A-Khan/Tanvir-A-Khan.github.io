import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function readInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem('tak-theme', next)
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  return {
    theme,
    toggleTheme,
    themeGlyph: theme === 'light' ? '☾' : '☀',
    themeLabel: theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode',
  }
}
