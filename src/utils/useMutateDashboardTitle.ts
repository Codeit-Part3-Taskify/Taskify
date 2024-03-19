import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import putDashboardTitle from 'src/apis/putDashboardTitle';
import { dashboardsAtom } from 'src/store/store';

export const useMutateDashboardTitle = (
  dashboardId: string | undefined,
  dashboardTitle: string,
  dashboardColor: string
) => {
  const queryClient = useQueryClient();
  const { refetch } = useAtomValue(dashboardsAtom);

  const refetchDashboards = async () => {
    await refetch();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      boardId,
      title,
      color
    }: {
      boardId: string | undefined;
      title: string;
      color: string;
    }) => putDashboardTitle(boardId, title, color),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['dashboardDetails', dashboardId]
      });
      refetchDashboards();
    }
  });

  const updateDashboardTitle = () => {
    mutate({
      boardId: dashboardId,
      title: dashboardTitle,
      color: dashboardColor
    });
  };

  return {
    updateDashboardTitle,
    isPending
  };
};
