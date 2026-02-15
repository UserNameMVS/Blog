import { FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Container.module.scss'

export const Container: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
  return <div className={classNames(cls.Container, {}, [className])}>{children}</div>
}
