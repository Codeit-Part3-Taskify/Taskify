import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from 'src/apis/getMyInfo';
import { Link } from 'react-router-dom';
import stroke from 'src/assets/images/stroke.svg';
import DashboardMemebers from '../Navbar/DashboardMembers';
import DashboardTitle from '../Navbar/DashboardTitle';
import NavButtons from '../Navbar/NavButtons';
import Profile from '../Profile/Profile';

export default function Navbar() {
  const { data } = useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo()
  });

  return (
    <div className="flex items-center w-screen tablet:h-[7rem] h-[6rem] bg-white desktop:pl-[34rem] desktop:pr-[8rem] tablet:pr-[4rem] pr-[1.2rem] border border-b-gray_D9D9D9">
      <div className="flex desktop:justify-between justify-end w-[100%]">
        <DashboardTitle />
        <div className="flex items-center desktop:gap-[3.2rem] tablet:gap-[2.4rem] gap-[1.2rem]">
          <NavButtons />
          <DashboardMemebers />
          <img
            src={stroke}
            alt="세로 줄"
            className="tablet:h-[3.8rem] h-[3.4rem]"
          />
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
