import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import ThemeProvider from './app/providers/themeProvider/ThemeProvider'

import 'shared/config/i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
