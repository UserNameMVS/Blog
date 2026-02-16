import { classNames } from 'shared/lib'
import { Container } from 'shared/ui/Container/Container'
import cls from './Header.module.scss'
import { Navbar } from './Navbar/Navbar'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => (
  <header className={classNames(cls.header, {}, [className])}>
    <Container>
      <div className={cls.wrapper}>
        Лого
        <Navbar />
      </div>
    </Container>
  </header>
)
