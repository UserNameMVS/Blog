import { classNames } from 'shared/lib'
import { AppLink, AppLinkTheme } from 'shared/ui'
import { Container } from 'shared/ui/Container/Container'
import cls from './Header.module.scss'
import { useTranslation } from 'react-i18next'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation('header')
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <Container>
        <div className={cls.wrapper}>
          <nav>
            <ul className={cls.navList}>
              <li className={cls.listItem}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
                  {t('Главная')}
                </AppLink>
              </li>
              <li className={cls.listItem}>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
                  {t('О нас')}
                </AppLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
