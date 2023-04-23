import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from 'common/routes/main'
import { Example } from 'common/components/example'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: 'example',
      element: <Example />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
