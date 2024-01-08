import { routesConfig } from 'pages/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRouting = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routesConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </main>
  )
}
