import { routesConfig } from 'pages/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Center, Spinner } from 'shared/ui'

export const AppRouting = () => (
  <main>
    <Routes>
      {Object.values(routesConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense
              fallback={
                <Center>
                  <Spinner />
                </Center>
              }
            >
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  </main>
)
