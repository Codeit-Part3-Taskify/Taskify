import { BaseSyntheticEvent } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import readCardDetail from 'src/apis/readCardDetail';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import type { CardData, PutCard } from 'src/types/cardTypes';
import { uploadCardImage } from 'src/apis/uploadCardImage';
import { updateCardData } from 'src/apis/updateCardData';
import readColumnList from 'src/apis/readColumnList';
import useCardCommon from './useCardCommon';

export default function useUpdateCard() {
  const {
    modal,
    setModal,
    boardId,
    queryClient,
    memberListQeury,
    tagList,
    setTagList,
    tagValue,
    setTagValue,
    imageValue,
    setImageValue
  } = useCardCommon();

  const { data } = useQuery<CardData>({
    queryKey: ['readCardDetail', modal.cardId],
    queryFn: () => readCardDetail(modal.cardId)
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<PutCard>({
    mode: 'onSubmit',
    defaultValues: data
  });

  const query = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  const { mutateAsync: updateCardMutation } = useMutation<
    void,
    Error,
    { cardId: number; body: PutCard }
  >({
    mutationFn: ({ cardId, body }) => updateCardData(cardId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCardList'] });
      queryClient.invalidateQueries({ queryKey: ['cardList'] });
    }
  });

  const handleTagDelete = (item: string) => {
    const newAry = tagList.filter(tag => tag !== item);
    setValue('tags', newAry);
    setTagList(newAry);
  };

  const handleChangeImage = (event: BaseSyntheticEvent) => {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    setImageValue(imgUrl);
    setValue('imageUrl', event.target.files[0]);
  };

  const submit = async (formData: PutCard) => {
    if (!imageValue) {
      const body = { ...formData, imageUrl: null };
      await updateCardMutation({ cardId: modal.cardId, body });
    } else if (typeof formData.imageUrl === 'string') {
      updateCardMutation({ cardId: modal.cardId, body: formData });
    } else {
      const { imageUrl } = await uploadCardImage(
        modal.columnId,
        formData.imageUrl
      );
      const body = { ...formData, imageUrl };
      updateCardMutation({ cardId: modal.cardId, body });
    }
    setModal(prev => ({ ...prev, name: 'cardDetail' }));
  };

  return {
    handleSubmit,
    submit,
    register,
    query,
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
