import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from 'common/routes/main'
import { Example } from 'common/components/example'
import { Medicines } from 'common/routes/medicines'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />
    },
    {
      path: 'example',
      element: <Example />
    },
    {
      path: 'medicines',
      element: <Medicines />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
