import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { updateColumn } from 'src/apis/updateColumn';
import { modalAtom } from 'src/store/store';
import { deleteColumn } from 'src/apis/deleteColumn';

export default function useManageColumn() {
  const [modal, setModal] = useAtom(modalAtom);
  const queryClient = useQueryClient();
  const [inputValue, setValue] = useState(modal.columnTitle);
  const { mutateAsync: deleteColumnMutation } = useMutation<
    void,
    Error,
    { columnId: number }
  >({
    mutationFn: ({ columnId }) => deleteColumn(columnId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readColumnList'] });
    }
  });

  // useMutation
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
    deleteColumnMutation({ columnId: modal.columnId });
    setModal(prev => ({ ...prev, status: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateColumnMutation({ value: inputValue, columnId: modal.columnId });
    setModal(prev => ({ ...prev, status: false }));
  };

  return { inputValue, setValue, handleClick, handleSubmit };
}
