import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import { App } from './app'
import './app/styles/index.scss'

render(
  <ErrorBoundary>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
