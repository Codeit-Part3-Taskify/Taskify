import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import createDashboards from 'src/apis/createDashboards';

interface NewPost {
  title: string;
  color: string;
}

export default function useCreateDashBoard() {
  const [selectedColor, setSelectedColor] = useState('#7AC555');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const queryClient = useQueryClient();
  const setModalState = useSetAtom(modalAtom);

  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: NewPost) => createDashboards(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dashboards'] });
    }
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue = e.currentTarget.inputId.value.trim();
    if (!inputValue) {
      setErrorMessage('대시보드 이름을 입력하세요.');
      return;
    }

    const newPost = {
      title: e.currentTarget.inputId.value,
      color: selectedColor
    };
    mutate(newPost, {
      onSuccess: () => {
        setModalState(prev => ({ ...prev, status: false }));
      }
    });
  };

  return {
    selectedColor,
    setSelectedColor,
    errorMessage,
    setErrorMessage,
    onSubmit,
    isPending
  };
}
