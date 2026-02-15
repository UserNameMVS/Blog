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
  const { className, type = 'button', children, theme, ...rest } = props

  return (
    <button
      type={type}
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...rest}>
      {children}
    </button>
  )
}
