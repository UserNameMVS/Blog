import { FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Spinner.module.scss'

interface SpinnerProps {
  className?: string
}

export const Spinner: FC<SpinnerProps> = ({ className }) => <div className={classNames(cls.Spinner, {}, [className])} />
