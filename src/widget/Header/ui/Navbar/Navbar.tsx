import { useTranslation } from 'react-i18next'
import { AppLink /* , AppLinkTheme */ } from 'shared/ui'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib'

interface NavProps {
  className?: string
}

export const Navbar = ({ className }: NavProps) => {
  const { t } = useTranslation('header')

  return (
    <nav>
      <ul className={classNames(cls.navList, {}, [className])}>
        <li>
          <AppLink to='/'>{t('Главная')}</AppLink>
        </li>
        <li>
          <AppLink to='/about'>{t('О нас')}</AppLink>
        </li>
      </ul>
    </nav>
  )
}
