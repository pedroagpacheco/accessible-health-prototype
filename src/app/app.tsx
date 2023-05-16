import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Edu } from 'common/routes/edu'
import { Main } from 'common/routes/main'
import { Exams } from 'common/routes/exams'
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
    },
    {
      path: 'exams',
      element: <Exams />
    },
    {
      path: 'edu',
      element: <Edu />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
