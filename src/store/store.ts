import { atomWithQuery } from 'jotai-tanstack-query';
import getDashboards from '../apis/getDashboards';

export const dashboardsAtom = atomWithQuery(() => ({
  queryKey: ['dashboards'],
  queryFn: () => getDashboards()
}));
// export const cardListAtom = atomWithQuery(() => ({
//   queryKey: ['cardList'],
//   queryFn: () => readCardList()
// }));

// export const columnListAtom = atom(id => ({
//   queryKey: ['columnList', id],
//   queryFn: () => readColumnInfo(String(id))
// }));
// 쿼리 = 데이터 중복 없이
// 조타이 = 전역 상태관리
