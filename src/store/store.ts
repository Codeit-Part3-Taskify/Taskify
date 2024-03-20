import { atomWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { ModalType } from 'src/types/modalTypes';
import getDashboards from '../apis/getDashboards';

// TODO 나중에 삭제
export const dashboardsAtom = atomWithQuery(() => ({
  queryKey: ['dashboards'],
  queryFn: () => getDashboards()
}));

export const modalAtom = atom<{
  status: boolean;
  name: ModalType;
  columnId?: number;
  columnTitle?: ModalType | string;
}>({
  status: false,
  name: '',
  columnId: 0,
  columnTitle: ''
});
