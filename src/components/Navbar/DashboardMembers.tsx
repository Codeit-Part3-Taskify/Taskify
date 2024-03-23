import { Params, useParams } from 'react-router-dom';
import getDashboardMembers from 'src/apis/getDashboardMembers';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

export default function DashboardMemebers() {
  const [visibleMembersCount, setVisibleMembersCount] = useState(4);
  const [invisibleMembersCount, setInvisibleMembersCount] = useState(0);
  const [isDesktopView, setIsDesktopView] = useState(true);
  const { boardId } = useParams<Params>();

  const { data } = useQuery({
    queryKey: ['navDashboardMembers', boardId],
    queryFn: () => getDashboardMembers(boardId)
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        // 데스크톱
        setIsDesktopView(true);
        setVisibleMembersCount(4);
      } else {
        // 태블릿, 모바일
        setIsDesktopView(false);
        setVisibleMembersCount(2);
      }
    };

    // 컴포넌트 마운트 시 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    handleResize();

    // 축약 멤버 수 결정
    const totalCount = data?.totalCount ?? 1;
    setInvisibleMembersCount(totalCount - visibleMembersCount);

    // 컴포넌트 언마운트 시 리사이즈 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktopView, data]);

  return (
    <div className="flex items-center tablet:ml-[0.8rem] ml-[0.4rem] desktop:w-[15.7rem] tablet:w-[9.7rem] w-[8.5rem]">
      {data?.members.map((member, index) => (
        <div className="relative">
          {index < visibleMembersCount ? (
            <div
              key={member.id}
              className="relative"
              style={{
                left: `${index * -8}px`,
                zIndex: index + 1
              }}
            >
              <Profile
                size="basicSize"
                profileImgSrc={member.profileImageUrl}
                userName={member.nickname}
                border="white"
                isNameVisible="invisible"
              />
            </div>
          ) : null}
        </div>
      ))}
      {invisibleMembersCount > 0 ? (
        <div
          className="relative"
          style={{
            left: `${visibleMembersCount * -8}px`,
            zIndex: visibleMembersCount + 1
          }}
        >
          <div className="bg-pink_F4D7DA rounded-full  tablet:w-[3.8rem] tablet:h-[3.8rem] w-[3.4rem] h-[3.4rem] border border-[0.2rem] border-white" />
          <span className="flex absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 tablet:text-[1.6rem] text-[1.4rem] font-medium text-red_D25B68">
            +{invisibleMembersCount}
          </span>
        </div>
      ) : null}
    </div>
  );
}
