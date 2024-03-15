import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBar';
import MyPage from '../pages/MyPage/MyPage';
import Dashboard from '../pages/Dashboard/DashboardPage';

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
      }
    ]
  }
]);

export default router;
