import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import MyPage from '../pages/MyPage/MyPage';
import Dashboard from '../pages/Dashboard/DashboardPage';
import MyDashboardPage from '../pages/Dashboard/MyDashboardPage';
import EditDashboardPage from '../pages/EditDashboard/EditDashboardPage';
import LogIn from '../pages/LogIn/LogIn';
import SignUp from '../pages/SignUp/SignUp';
import LandingPage from '../pages/Landing/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
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
  },
  {
    path: '/signup',
    element: <SignUp />
  }
]);

export default router;
