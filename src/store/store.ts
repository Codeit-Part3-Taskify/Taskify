import { atomWithQuery } from 'jotai-tanstack-query';
import { atom } from 'jotai';
import { ModalType } from 'src/types/modalTypes';
import getDashboards from '../apis/getDashboards';

export const modalAtom = atom<{
  status: boolean;
  name: ModalType;
  columnId: number;
  columnTitle: ModalType | string;
}>({
  status: false,
  name: '',
  columnId: 0,
  columnTitle: ''
});
