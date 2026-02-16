import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib'
import cls from './AppLink.module.scss'

interface AppLinkProps extends NavLinkProps {
  className?: string
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, ...props }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(cls.AppLink, { [cls.active]: isActive }, [className])}
    {...props}
  >
    {children}
  </NavLink>
)
