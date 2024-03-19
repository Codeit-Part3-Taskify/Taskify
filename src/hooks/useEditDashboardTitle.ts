import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getDashboardDetails from 'src/apis/getDashboardDetails';
import putDashboardTitle from 'src/apis/putDashboardTitle';
import { useAtomValue } from 'jotai';
import { dashboardsAtom } from 'src/store/store';

export const useEditDashboardtitle = (boardId: string | undefined) => {
  const queryClient = useQueryClient();
  const { refetch } = useAtomValue(dashboardsAtom);
  const { data } = useQuery({
    queryKey: ['dashboardDetails', boardId],
    queryFn: () => getDashboardDetails(boardId)
  });

  const dashboardColor = data?.color ?? '';
  const dashboardTitle = data?.title ?? '';

  const refreshDashboards = async () => {
    await refetch();
  };

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
        queryKey: ['dashboardDetails', boardId]
      });
      refreshDashboards();
    }
  });

  return {
    dashboardColor,
    dashboardTitle,
    mutate,
    isPending
  };
};
