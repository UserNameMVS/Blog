import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Button, ThemeButton } from 'shared/ui/Button'
import { LangSwitcher } from 'features/themeSwitcher/ui/LangSwitcher/LangSwitcher'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'features/themeSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t, i18n } = useTranslation()

  const handleToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  console.log()

  return (
    <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={handleToggle} theme={ThemeButton.CLEAR}>
        X
      </Button>
      <div className={cls.tools}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
}
