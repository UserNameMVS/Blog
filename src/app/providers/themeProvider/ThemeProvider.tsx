import { FC, useEffect, useMemo, useState } from 'react'
import { ALL_THEMES, Theme, THEMES } from 'shared/types/theme'
import { ThemeContext } from './lib/ThemeContext'

const LOCAL_STORAGE_THEME_KEY = 'app_theme'

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  if (saved && ALL_THEMES.includes(saved)) return saved

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK
  }

  return THEMES.LIGHT
}

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT)

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
      if (!savedTheme) {
        const newTheme = mediaQuery.matches ? THEMES.DARK : THEMES.LIGHT
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        setTheme(next)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, next)
        document.documentElement.setAttribute('data-theme', next)
      },
    }),
    [theme]
  )

  if (!theme) return null

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
