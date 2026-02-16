import { useTheme } from 'features/themeSwitcher/lib'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames'
import { THEMES } from 'shared/types/theme'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

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
