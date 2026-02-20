import React, { FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Container.module.scss'

interface ContainerProps {
  className?: string
  children?: React.ReactNode
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={classNames(cls.Container, {}, [className])}>{children}</div>
)
