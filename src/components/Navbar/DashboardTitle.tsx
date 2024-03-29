import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Params, useParams } from 'react-router-dom';
import crown from 'src/assets/images/crown.svg';
import getDashboardDetails from 'src/apis/getDashboardDetails';

export default function DashboardTitle() {
  const { boardId } = useParams<Params>();
  const { data } = useQuery({
    queryKey: ['dashboardDetails', boardId],
    queryFn: () => getDashboardDetails(boardId)
  });

  return (
    <div className="flex items-center gap-[0.8rem]">
      <div className="text-[2rem] font-bold">{data?.title}</div>
      {data?.createdByMe ? (
        <img
          className="w-[2rem] h-[1.6rem]"
          src={crown}
          alt="내가 만든 대시보드를 표시하는 크라운 이미지"
        />
      ) : null}
    </div>
  );
}
