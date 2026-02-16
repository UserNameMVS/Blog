import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = props => {
  const { className, type, children, theme, ...rest } = props

  return (
    <button
      type={type || 'button'}
      className={classNames(cls.Button, { [cls[theme]]: theme && cls[theme] }, [className])}
      {...rest}
    >
      {children}
    </button>
  )
}
