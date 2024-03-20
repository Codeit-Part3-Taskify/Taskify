import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBarLayout';
import MyPage from '../pages/MyPage/MyPage';
import Dashboard from '../pages/Dashboard/DashboardPage';
import MyDashboardPage from '../pages/Dashboard/MyDashboardPage';
import EditDashboardPage from '../pages/EditDashboard/EditDashboardPage';
import LogIn from '../pages/LogIn/LogIn';

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
        path: '/dashboard/:boardId',
        element: <Dashboard />
      },
      {
        path: '/mydashboard',
        element: <MyDashboardPage />
      },
      {
        path: '/dashboard/:boardId/edit',
        element: <EditDashboardPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LogIn />
  }
]);

export default router;
