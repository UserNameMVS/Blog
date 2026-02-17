import { AboutPage, MainPage } from 'pages/ui'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  // eslint-disable-next-line no-unused-vars
  MAIN = 'main',
  // eslint-disable-next-line no-unused-vars
  ABOUT = 'about',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: '/about',
    element: <AboutPage />,
  },
}
