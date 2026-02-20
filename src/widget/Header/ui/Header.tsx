import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { Container } from 'shared/ui'
import cls from './Header.module.scss'
import { Navbar } from './Navbar'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation()

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <Container>
        <div className={cls.wrapper}>
          {t('Лого')}
          <Navbar />
        </div>
      </Container>
    </header>
  )
}
