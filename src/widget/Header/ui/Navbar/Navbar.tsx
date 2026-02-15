// import { classNames } from 'shared/lib'
import { AppLink /* , AppLinkTheme */ } from 'shared/ui'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavProps {
  className?: string
}

export const Navbar = ({ className }: NavProps) => {
  const { t } = useTranslation('header')

  return (
    <nav>
      <ul className={cls.navList}>
        <li>
          <AppLink to='/' /* ` theme={AppLinkTheme.SECONDARY}` */>{t('Главная')}</AppLink>
        </li>
        <li>
          <AppLink to='/about' /* theme={AppLinkTheme.SECONDARY} */>{t('О нас')}</AppLink>
        </li>
      </ul>
    </nav>
  )
}
