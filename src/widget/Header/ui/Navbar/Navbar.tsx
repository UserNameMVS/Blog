import { RoutePath } from 'pages/config'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { AppLink } from 'shared/ui'
import cls from './Navbar.module.scss'

interface NavProps {
  className?: string
}

export const Navbar = ({ className }: NavProps) => {
  const { t } = useTranslation('header')

  return (
    <nav>
      <ul className={classNames(cls.navList, {}, [className])}>
        <li>
          <AppLink to={RoutePath.main}>{t('Главная')}</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.about}>{t('О нас')}</AppLink>
        </li>
      </ul>
    </nav>
  )
}
