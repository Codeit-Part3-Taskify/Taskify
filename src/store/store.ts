import { atomWithQuery } from 'jotai-tanstack-query';
import readColumnInfo from 'src/apis/readColumnInfo';
import readCardList from 'src/apis/readCardList';
import getDashboards from '../apis/getDashboards';

export const dashboardsAtom = atomWithQuery(() => ({
  queryKey: ['dashboards'],
  queryFn: () => getDashboards()
}));

export const cardListAtom = atomWithQuery(() => ({
  queryKey: ['cardList'],
  queryFn: () => readCardList()
}));

export const columnListAtom = atomWithQuery(() => ({
  queryKey: ['columnList'],
  queryFn: () => readColumnInfo(4847)
}));
// 쿼리 = 데이터 중복 없이
// 조타이 = 전역 상태관리
