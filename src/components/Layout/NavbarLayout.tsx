import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from 'src/apis/getMyInfo';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import stroke from 'src/assets/images/stroke.svg';
import DashboardMemebers from '../Navbar/DashboardMembers';
import DashboardTitle from '../Navbar/DashboardTitle';
import NavButtons from '../Navbar/NavButtons';
import Profile from '../Profile/Profile';

const basicStyle =
  'flex items-center desktop:gap-[3.2rem] tablet:gap-[2.4rem] gap-[1.2rem]';
const activeStyle = 'hidden';

export default function Navbar() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo()
  });
  const location = useLocation();
  const isActiveRoute = (route: any) => location.pathname === route;

  const navButtonStyle =
    isActiveRoute('/mydashboard') || isActiveRoute('/mypage')
      ? `${basicStyle} ${activeStyle}`
      : basicStyle;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="flex items-center w-screen tablet:h-[7rem] h-[6rem] bg-white desktop:pl-[34rem] desktop:pr-[8rem] tablet:pr-[4rem] pr-[1.2rem] border border-b-gray_D9D9D9">
      <div className="flex justify-end desktop:justify-between w-[100%]">
        <div className="flex items-center hidden desktop:flex">
          <DashboardTitle />
          <NavLink
            to="/mydashboard"
            className={({ isActive }) =>
              isActive ? 'text-[2rem] font-bold' : 'hidden'
            }
          >
            <p>내 대시보드</p>
          </NavLink>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              isActive ? 'text-[2rem] font-bold' : 'hidden'
            }
          >
            <p>계정 관리</p>
          </NavLink>
        </div>
        <div className="flex items-center desktop:gap-[3.2rem] tablet:gap-[2.4rem] gap-[1.2rem]">
          <div className={navButtonStyle}>
            <NavButtons />
            <DashboardMemebers />
            <img
              src={stroke}
              alt="세로 줄"
              className="tablet:h-[3.8rem] h-[3.4rem]"
            />
          </div>
          <Link to="/mypage">
            <Profile
              size="basicSize"
              border="white"
              userName={data?.nickname}
              profileImgSrc={data?.profileImageUrl}
              isNameVisible="mobileInvisible"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
