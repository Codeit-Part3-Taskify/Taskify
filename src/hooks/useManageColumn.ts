import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { updateColumn } from 'src/apis/updateColumn';
import { modalAtom } from 'src/store/store';
import { deleteColumn } from 'src/apis/deleteColumn';

export default function useDeleteColumn() {
  const [modal, setModal] = useAtom(modalAtom);
  const [inputValue, setValue] = useState(modal.columnTitle);
  const queryClient = useQueryClient();
  const { mutateAsync: deleteColumnMutation } = useMutation({
    mutationFn: deleteColumn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
    }
  });

  const { mutateAsync: updateColumnMutation } = useMutation<
    void,
    Error,
    { value: string; columnId: number }
  >({
    mutationFn: ({ value, columnId }) => updateColumn(value, columnId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    deleteColumnMutation(modal.columnId);
    setModal(prev => ({ ...prev, status: false }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateColumnMutation({ value: inputValue, columnId: modal.columnId });
    queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
  };

  return { inputValue, setValue, handleClick, handleSubmit };
}
