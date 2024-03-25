import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Params, useNavigate, useParams } from 'react-router-dom';
import deleteDashboard from 'src/apis/deleteDashboard';

export default function useDeleteDashboard(boardId: string | undefined) {
  const queryClient = useQueryClient();
  const natvigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (boardId: string | undefined) => deleteDashboard(boardId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['dashboards']
      });
      natvigate('/mydashboard');
    }
  });

  const handleDashboardDeleteButtonClick = () => {
    console.log('aasdas');
    mutate(boardId);
  };

  return { handleDashboardDeleteButtonClick };
}
