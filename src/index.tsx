import { ThemeProvider } from 'app/providers/ThemeProvider/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import 'shared/styles/themes.scss'
import { App } from './app'
import './app/styles/index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
