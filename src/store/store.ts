import { atomWithQuery } from 'jotai-tanstack-query';
import getDashboards from '../apis/getDashboards';

export const dashboardsAtom = atomWithQuery(() => ({
  queryKey: ['dashboards'],
  queryFn: () => getDashboards()
}));
