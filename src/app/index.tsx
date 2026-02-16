import { AppRouting } from 'app/providers/appRouter'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Container } from 'shared/ui/Container/Container'
import { Header } from 'widget/Header'
import { Sidebar } from 'widget/Sidebar'

export const App = () => (
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
