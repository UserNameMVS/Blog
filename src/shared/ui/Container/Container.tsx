import { FC, ReactNode } from 'react'
import { classNames } from 'shared/lib'
import cls from './Container.module.scss'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={classNames(cls.Container, {}, [className])}>{children}</div>
}
