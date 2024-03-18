import { atomWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { ModalType } from 'src/types/modalTypes';
import getDashboards from '../apis/getDashboards';

export const dashboardsAtom = atomWithQuery(() => ({
  queryKey: ['dashboards'],
  queryFn: () => getDashboards()
}));

export const modalAtom = atom<{ status: boolean; name: ModalType }>({
  status: false,
  name: ''
});
