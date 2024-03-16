import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBarLayout';
import MyPage from '../components/MyPage/MyPage';
import MyDashboardPage from '../pages/MyDashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'mypage',
        element: <MyPage />
      },
      {
        path: '/mydashboard',
        element: <MyDashboardPage />
      }
    ]
  }
]);

export default router;
