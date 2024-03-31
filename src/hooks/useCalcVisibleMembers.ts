import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import getDashboardMembers from 'src/apis/getDashboardMembers';

export default function useCalcVisibleMembers() {
  const [visibleMembersCount, setVisibleMembersCount] = useState(4);
  const [invisibleMembersCount, setInvisibleMembersCount] = useState(0);
  const [isDesktopView, setIsDesktopView] = useState(true);
  const { boardId } = useParams<Params>();

  const { data } = useQuery({
    queryKey: ['navDashboardMembers', boardId],
    queryFn: () =>
      boardId
        ? getDashboardMembers(boardId)
        : Promise.reject(new Error('boardId is undefined')),
    enabled: !!boardId
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

  return { data, visibleMembersCount, invisibleMembersCount };
}
