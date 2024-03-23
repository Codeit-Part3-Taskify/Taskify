import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getDashboardDetails from 'src/apis/getDashboardDetails';
import putDashboardTitle from 'src/apis/putDashboardTitle';

export const useUpdateDashboardTitle = (boardId: string | undefined) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['dashboardDetails', boardId],
    queryFn: () => getDashboardDetails(boardId)
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      dashboardId,
      title,
      color
    }: {
      dashboardId: string | undefined;
      title: string;
      color: string;
    }) => putDashboardTitle(dashboardId, title, color),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['dashboards']
      });
    },

    onError: error => alert(error.message)
  });

  return {
    data,
    mutate,
    isPending
  };
};
