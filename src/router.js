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
            element: <p>design your cv</p>
          },
          {
            path: 'my-networks',
            element: <p>my network</p>
          },
          {
            path: 'jobs',
            element: <p>jobs list</p>
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
