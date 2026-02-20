import { Theme, THEMES } from 'app/providers/ThemeProvider/types/theme'
import { createContext } from 'react'

export interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEMES.DARK,
  setTheme: () => {
    throw new Error('setTheme must be used within ThemeProvider')
  },
})
