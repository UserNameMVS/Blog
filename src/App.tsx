import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageLazy } from './pages/aboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/mainPage.tsx/MainPage.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Главная</Link>
              <Link to='/about'>О нас </Link>
            </li>
          </ul>
          <button onClick={toggleTheme}>Theme</button>
        </nav>
      </header>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' element={<MainPageLazy />} />
          <Route path='/about' element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}
