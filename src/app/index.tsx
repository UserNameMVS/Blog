import { AppRouting } from 'app/providers/AppRouter'
import { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Container } from 'shared/ui'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar'

export const App = () => {
  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error('Test error')
    }
  }, [])

  return (
    <Suspense fallback=''>
      <div className={classNames('app')}>
        <Container>
          <Header />
          <div className='content-page'>
            <Sidebar />
            <AppRouting />
          </div>
        </Container>
      </div>
    </Suspense>
  )
}
