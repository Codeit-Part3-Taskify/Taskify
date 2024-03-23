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
    selecTedDate,
    setSelectedDate,
    memberListQeury,
    tagList,
    setTagList,
    tagValue,
    setTagValue,
    imageValue,
    setImageValue
  } = useCardCommon();

  const { register, setValue, control, handleSubmit } = useForm<PutCard>({
    mode: 'onSubmit'
  });

  useQuery<CardData>({
    queryKey: ['readCardDetail', modal.cardId],
    queryFn: async () => {
      const cardData = await readCardDetail(modal.cardId);
      for (const [key, value] of Object.entries(cardData) as any) {
        if (
          key === 'title' ||
          key === 'description' ||
          key === 'dueDate' ||
          key === 'imageUrl' ||
          key === 'tags'
        ) {
          setValue(key, value);
          if (key === 'imageUrl') {
            setImageValue(value);
          }
          if (key === 'tags') {
            setTagList(value);
          }
        } else if (key === 'assignee') {
          setValue('assigneeUserId', value.id);
        } else if (key === 'columnId') {
          setValue(key, value);
        }
      }
      return cardData;
    }
  });

  const query = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  const handleChange = (dateChange: Date) => {
    setValue('dueDate', moment(dateChange).format('yyyy-MM-DD HH:mm'));
    setSelectedDate(dateChange);
  };

  const { mutateAsync: updateCardMutation } = useMutation<
    void,
    Error,
    { cardId: number; body: PutCard }
  >({
    mutationFn: ({ cardId, body }) => updateCardData(cardId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCardList'] });
    }
  });

  const handleChangeImage = (event: BaseSyntheticEvent) => {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    setImageValue(imgUrl);
    setValue('imageUrl', event.target.files[0]);
  };

  const submit = async (formData: PutCard) => {
    if (!imageValue) {
      const body = { ...formData, imageUrl: undefined };
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
    setModal(prev => ({ ...prev, status: false }));
  };

  return {
    handleSubmit,
    submit,
    register,
    query,
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
    setValue
  };
}
