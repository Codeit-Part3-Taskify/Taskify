import { atom } from 'jotai';
import { ModalType } from 'src/types/modalTypes';

export const modalAtom = atom<{
  status: boolean;
  name: ModalType;
  columnId: number;
  columnTitle: ModalType | string;
  cardId: number;
}>({
  status: false,
  name: '',
  columnId: 0,
  columnTitle: '',
  cardId: 0
});

export const userEmailAtom = atom<string>('');
