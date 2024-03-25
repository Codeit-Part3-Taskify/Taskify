import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import readCardList from 'src/apis/readCardList';
import { ColumnData } from 'src/types/columnTypes';
import { throttle } from 'lodash';
import { PAGENATION_SIZE } from 'src/constants/pagenation';

export default function useInfiniteScrollCards(columnInfo: ColumnData) {
  const [pageSize, setPageSize] = useState(11);
  const cardContainer = useRef<HTMLDivElement>(null);

  // 무한스크롤
  const {
    data: cardList,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery({
    queryKey: ['cardList', columnInfo.id],
    queryFn: ({ pageParam }) =>
      readCardList(columnInfo.id, pageParam, pageSize),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.cursorId
  });

  const handleScroll = useCallback(
    throttle(() => {
      const container = cardContainer.current;
      if (container) {
        const { scrollHeight, scrollTop, clientHeight } = container;
        const scrollBottom = scrollHeight - scrollTop - clientHeight;
        if (scrollBottom < 200 && hasNextPage) {
          fetchNextPage();
        }
      }
    }, 200),
    [fetchNextPage, hasNextPage]
  );

  return {
    cardList,
    fetchNextPage,
    cardContainer,
    handleScroll
  };
}
