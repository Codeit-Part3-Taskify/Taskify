import { FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAtomValue, useSetAtom } from 'jotai';
import { boardIdAtom, modalAtom } from 'src/store/store';
import { createColumn } from 'src/apis/createColumn';
import readColumnList from 'src/apis/readColumnList';
import { ColumnData } from 'src/types/columnTypes';

export default function useCreateColumn() {
  const [value, setValue] = useState('');
  const boardId = useAtomValue(boardIdAtom);
  const queryClient = useQueryClient();
  const setModalState = useSetAtom(modalAtom);

  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: readColumnList
  });
  const { mutateAsync: createColumnMutation } = useMutation({
    mutationFn: createColumn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
    }
  });

  // 타입 찾아야함
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target['name'].value;
    const result = data.data.some(
      (column: ColumnData) => title === column.title
    );
    const body = {
      title,
      dashboardId: Number(boardId)
    };

    if (result) alert('컬럼이 중복됩니다!');
    else if (data.data.length >= 10)
      alert('컬럼은 10개까지만 만들 수 있습니다!');
    else {
      createColumnMutation(body);
      setModalState(prev => ({ ...prev, status: false }));
    }
  };

  return { handleSubmit, value, setValue };
}
