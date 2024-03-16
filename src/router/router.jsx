import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBarLayout';
import MyPage from '../pages/MyPage/MyPage';
import Dashboard from '../pages/Dashboard/DashboardPage';
import MyDashboardPage from '../pages/Dashboard/MyDashboardPage';
import EditDashboardPage from '../pages/EditDashboard/EditDashboardPage';

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
      },
      {
        path: '/dashboard/:boardid/edit',
        element: <EditDashboardPage />
      }
    ]
  }
]);

export default router;
