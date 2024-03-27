import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Params, useNavigate, useParams } from 'react-router-dom';
import deleteDashboard from 'src/apis/deleteDashboard';

export default function useDeleteDashboard() {
  const { boardId } = useParams<Params>();
  const queryClient = useQueryClient();
  const natvigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => deleteDashboard(boardId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['dashboards']
      });
      natvigate('/mydashboard');
    }
  });

  const handleDashboardDeleteButtonClick = () => {
    mutate();
  };

  return { handleDashboardDeleteButtonClick };
}
