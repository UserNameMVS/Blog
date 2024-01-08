import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Container } from 'shared/ui/Container/Container'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar'
import { AppRouting } from './providers/appRouter'
import { useTheme } from './providers/themeProvider/useTheme'
import './styles/index.scss'

export const App = () => {
  const { theme } = useTheme()

  return (
    <Suspense>
      <div className={classNames('app', {}, [theme])}>
        <Container>
          <Header />
          <div className='page-content'>
            <Sidebar />
            <AppRouting />
          </div>
        </Container>
      </div>
    </Suspense>
  )
}
