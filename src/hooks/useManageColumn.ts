import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { updateColumn } from 'src/apis/updateColumn';
import { modalAtom } from 'src/store/store';
import { deleteColumn } from 'src/apis/deleteColumn';
import { useParams } from 'react-router-dom';
import checkColumnName from 'src/utils/checkColumnName';
import { ColumnData } from 'src/types/columnTypes';

export default function useManageColumn() {
  const [modal, setModal] = useAtom(modalAtom);
  const queryClient = useQueryClient();
  const { boardId } = useParams();
  const data = checkColumnName(boardId);
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
  const { register, handleSubmit } = useForm<{ title: string }>({
    mode: 'onSubmit',
    defaultValues: {
      title: modal.columnTitle
    }
  });

  const handleDeleteAlertClick = () => {
    deleteColumnMutation({ columnId: modal.columnId });
    setModal(prev => ({
      ...prev,
      status: false
    }));
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setModal(prev => ({
      ...prev,
      name: 'alertDeleteCard'
    }));
  };

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

  const submit = (formData: { title: string }) => {
    const result = data.data.some(
      (column: ColumnData) => formData.title === column.title
    );
    if (result) alert('컬럼이 중복됩니다!');
    else {
      updateColumnMutation({ value: formData.title, columnId: modal.columnId });
      setModal(prev => ({ ...prev, status: false }));
    }
  };

  return {
    handleSubmit,
    submit,
    handleDeleteClick,
    handleDeleteAlertClick,
    register
  };
}
