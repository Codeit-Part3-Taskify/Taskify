import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Params, useNavigate, useParams } from 'react-router-dom';
import deleteDashboard from 'src/apis/deleteDashboard';

export default function useDeleteDashboard() {
  const queryClient = useQueryClient();
  const { boardId } = useParams<Params>();
  const natvigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => deleteDashboard(boardId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['dashboards', boardId]
      });
      natvigate('/mydashboard');
    }
  });

  const handleDashboardDeleteButtonClick = () => {
    mutate();
  };

  return { handleDashboardDeleteButtonClick };
}
