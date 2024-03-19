import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import { createColumn } from 'src/apis/createColumn';
import readColumnList from 'src/apis/readColumnList';
import { ColumnData } from 'src/types/columnTypes';
import { Params, useParams } from 'react-router-dom';

export default function useCreateColumn() {
  const [value, setValue] = useState('');
  const { boardId } = useParams<Params>();
  const queryClient = useQueryClient();
  const setModalState = useSetAtom(modalAtom);

  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  const { mutateAsync: createColumnMutation } = useMutation<
    void,
    Error,
    {
      title: string;
      dashboardId: number;
    }
  >({
    mutationFn: body => createColumn(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
    }
  });

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
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
