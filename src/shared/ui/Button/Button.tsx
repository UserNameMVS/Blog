import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib'
import cls from './Button.module.scss'

// interface ButtonProps extends HTMLProps<HTMLButtonElement> {
//   className?: string
// }

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

enum classButton {
  'clear',
}

export const Button: FC<ButtonProps> = ({ type = 'button', children, className, theme, ...rest }) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...rest}>
      {children}
    </button>
  )
}
