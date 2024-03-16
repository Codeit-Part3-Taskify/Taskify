import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBarLayout';
import MyPage from '../pages/MyPage/MyPage';
import Dashboard from '../pages/Dashboard/DashboardPage';
import MyDashboardPage from '../pages/Dashboard/MyDashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/mypage',
        element: <MyPage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/mydashboard',
        element: <MyDashboardPage />
      }
    ]
  }
]);

export default router;
