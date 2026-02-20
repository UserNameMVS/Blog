import { ALL_THEMES, Theme, THEMES } from 'app/providers/ThemeProvider/types/theme'
import { FC, useEffect, useMemo } from 'react'
import { useLocalStorage } from 'shared/lib/hooks/useLocalStorage'
import { ThemeContext } from '../lib/ThemeContext'

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
  const [theme, setTheme] = useLocalStorage<Theme>(LOCAL_STORAGE_THEME_KEY, getInitialTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
      if (!savedTheme) {
        const newTheme = mediaQuery.matches ? THEMES.DARK : THEMES.LIGHT
        setTheme(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [setTheme])

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
      },
    }),
    [theme, setTheme],
  )

  if (!theme) return null

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
