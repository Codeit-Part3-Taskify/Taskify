import { BaseSyntheticEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { createCard } from 'src/apis/createCard';
import type { PostCard } from 'src/types/cardTypes';
import { uploadCardImage } from 'src/apis/uploadCardImage';
import useCardCommon from './useCardCommon';

export default function useCreateCard() {
  const { modal, setModal, boardId, memberListQeury, queryClient } =
    useCardCommon();
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<PostCard>({
    mode: 'onSubmit',
    defaultValues: {
      dashboardId: Number(boardId),
      columnId: modal.columnId
    }
  });
  const [imageValue, setImageValue] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState<string>('');
  const { mutateAsync: createCardMutation, isError } = useMutation<
    void,
    Error,
    PostCard
  >({
    mutationFn: body => createCard(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCardList'] });
      queryClient.refetchQueries({ queryKey: ['cardList'] });
    }
  });

  const handleChangeImage = (event: BaseSyntheticEvent) => {
    setImageValue(URL.createObjectURL(event.target.files[0]));
    setValue('imageUrl', event.target.files[0]);
  };

  const handleTagDelete = (item: string) => {
    const newAry = tagList.filter(tag => tag !== item);
    setValue('tags', newAry);
    setTagList(newAry);
  };

  const submit = async (formData: PostCard) => {
    if (!imageValue) {
      createCardMutation({ ...formData, imageUrl: undefined });
    } else {
      const { imageUrl } = await uploadCardImage(
        modal.columnId,
        formData.imageUrl
      );
      createCardMutation({
        ...formData,
        imageUrl
      });
    }
    if (!isError) setModal(prev => ({ ...prev, status: false }));
  };

  return {
    handleSubmit,
    submit,
    register,
    memberListQeury,
    tagList,
    setTagValue,
    tagValue,
    imageValue,
    handleChangeImage,
    setTagList,
    setValue,
    handleTagDelete,
    setImageValue,
    errors,
    getValues
  };
}
