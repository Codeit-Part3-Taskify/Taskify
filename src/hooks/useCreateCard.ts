import { BaseSyntheticEvent } from 'react';
import { getMemberList } from 'src/apis/getMemberList';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { createCard } from 'src/apis/createCard';
import type { PostCard } from 'src/types/cardTypes';
import { uploadCardImage } from 'src/apis/uploadCardImage';
import useCardCommon from './useCardCommon';

export default function useCreateCard() {
  const {
    modal,
    setModal,
    boardId,
    memberListQeury,
    queryClient,
    selecTedDate,
    setSelectedDate,
    tagList,
    setTagList,
    tagValue,
    setTagValue,
    imageValue,
    setImageValue
  } = useCardCommon();
  const { register, setValue, control, handleSubmit } = useForm<PostCard>({
    mode: 'onSubmit',
    defaultValues: {
      dashboardId: Number(boardId),
      columnId: modal.columnId
    }
  });

  const handleChange = (dateChange: Date) => {
    setValue('dueDate', moment(dateChange).format('yyyy-MM-DD HH:mm'));
    setSelectedDate(dateChange);
  };

  const { mutateAsync: createCardMutation } = useMutation<
    void,
    Error,
    PostCard
  >({
    mutationFn: body => createCard(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCardList'] });
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
      await createCardMutation({ ...formData, imageUrl: undefined });
    } else {
      const { imageUrl } = await uploadCardImage(
        modal.columnId,
        formData.imageUrl
      );
      await createCardMutation({
        ...formData,
        imageUrl
      });
    }
    setModal(prev => ({ ...prev, status: false }));
  };

  return {
    handleSubmit,
    submit,
    register,
    memberListQeury,
    control,
    handleChange,
    selecTedDate,
    tagList,
    setTagValue,
    tagValue,
    imageValue,
    handleChangeImage,
    setTagList,
    setValue,
    handleTagDelete
  };
}
