import { Theme, useTheme } from 'app/providers/themeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib'
import { Button, ThemeButton } from 'shared/ui/Button'
import DarkIcon from '../../../assets/icons/theme-dark.svg'
import LigthIcon from '../../../assets/icons/theme-light.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button className={classNames(cls.ThemeSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggleTheme}>
      {theme === Theme.DARK ? <LigthIcon /> : <DarkIcon />}
    </Button>
  )
}
