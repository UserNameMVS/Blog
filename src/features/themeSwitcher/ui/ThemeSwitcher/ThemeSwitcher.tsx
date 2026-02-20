import { THEMES } from 'app/providers/ThemeProvider/types/theme'
import { useTheme } from 'features/themeSwitcher/lib'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames'
import { Button, ThemeButton } from 'shared/ui'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      aria-label={theme === THEMES.DARK ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === THEMES.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
