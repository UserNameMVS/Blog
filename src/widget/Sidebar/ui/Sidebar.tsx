import { ThemeSwitcher } from 'features/themeSwitcher'
import { LangSwitcher } from 'features/themeSwitcher/ui/LangSwitcher/LangSwitcher'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { useLocalStorage } from 'shared/lib/hooks'
import { Button, ThemeButton } from 'shared/ui'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useLocalStorage<boolean>('sidebar-collapsed', false)
  const { t } = useTranslation()

  const handleToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={handleToggle} theme={ThemeButton.CLEAR}>
        {t('Х')}
      </Button>
      <div className={cls.tools}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  )
}
