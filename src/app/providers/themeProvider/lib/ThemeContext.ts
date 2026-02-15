import { createContext } from 'react'
import { Theme, THEMES } from 'shared/types/theme'

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
