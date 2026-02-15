import { useTheme } from 'features/themeSwitcher/lib'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames'
import { THEMES } from 'shared/types/theme'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  console.log(classNames(cls.ThemeSwitcher, {}, [className]))
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      aria-label={theme === THEMES.DARK ? 'Switch to light mode' : 'Switch to dark mode'}>
      {theme === THEMES.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
