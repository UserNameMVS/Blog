import { ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'
import { Theme, THEMES } from 'shared/types/theme'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
