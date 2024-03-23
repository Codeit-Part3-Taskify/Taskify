import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import { createColumn } from 'src/apis/createColumn';
import { ColumnData } from 'src/types/columnTypes';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import checkColumnName from 'src/utils/checkColumnName';

export default function useCreateColumn() {
  const { register, watch, handleSubmit } = useForm<{ title: string }>({
    mode: 'onSubmit'
  });
  const queryClient = useQueryClient();
  const setModalState = useSetAtom(modalAtom);
  const { boardId } = useParams();
  const data = checkColumnName(boardId);
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

  const submit = (formData: { title: string }) => {
    const result = data.data.some(
      (column: ColumnData) => formData.title === column.title
    );
    const body = {
      title: formData.title,
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

  return { handleSubmit, submit, register, watch };
}
