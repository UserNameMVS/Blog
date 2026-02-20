import React, { FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Center.module.scss'

interface CenterProps {
  children: React.ReactNode
  className?: string
}

export const Center: FC<CenterProps> = ({ className, children }) => (
  <div className={classNames(cls.Center, {}, [className])}>{children}</div>
)
