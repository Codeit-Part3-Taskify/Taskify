import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/SideBarLayout';
import MyPage from '../components/MyPage/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'mypage',
        element: <MyPage />
      }
    ]
  }
]);

export default router;
