import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './layout/MainLayout/MainLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />
          },
          {
            path: 'design-cv',
            element: <HomePage />
          },
          {
            path: 'my-networks',
            element: <HomePage />
          },
          {
            path: 'jobs',
            element: <HomePage />
          },
          {
            path: 'my-profile',
            element: <div>my-profile</div>
          }
        ]
    },
    {
      path: '404',
      element: <div>not found</div>
    }
])

export default router;
