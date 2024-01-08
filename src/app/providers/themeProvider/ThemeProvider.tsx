import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../themeProvider/ThemeContext'

interface Props {
  children: React.ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = () => {
    setTheme((theme) => (theme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
  }

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme: toggleTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
