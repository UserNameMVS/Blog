import { FC, useState } from 'react'
import { classNames } from 'shared/lib'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'widget/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t, i18n } = useTranslation()

  const handleToggle = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <aside className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={handleToggle}>X</button>
      <div className={cls.switchers}>
        <ThemeSwitcher className={cls.switch} />
        <LangSwitcher className={cls.switch} />
      </div>
    </aside>
  )
}
