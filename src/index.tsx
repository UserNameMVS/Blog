import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import 'shared/styles/themes.scss'
import { App } from './app'
import './app/styles/index.scss'

render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
)
