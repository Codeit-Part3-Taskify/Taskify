import { useParams } from 'react-router-dom';
import { getMemberList } from 'src/apis/getMemberList';
import { useQuery } from '@tanstack/react-query';
import {
  Controller,
  UseFieldArrayProps,
  useFieldArray,
  useForm
} from 'react-hook-form';
import { createCard } from 'src/apis/createCard';
import type { PostCard } from 'src/types/cardTypes';
import { modalAtom } from 'src/store/store';
import { useAtomValue } from 'jotai';
import Profile from 'src/components/Profile/Profile';
import plusBtn from 'src/assets/images/plus.svg';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

// assigner: '',
// title: '',
// description: '',
// dueDate: '',
// tags: [],
// image: null

export default function CreateCard() {
  const modal = useAtomValue(modalAtom);
  const { boardId } = useParams();
  const {
    register,
    formState: { errors },
    watch,
    reset,
    control,
    handleSubmit,
    getValues,
    setError,
    setFocus
  } = useForm<PostCard>({
    mode: 'onSubmit',
    defaultValues: {
      dashboardId: Number(boardId),
      columnId: modal.columnId
    }
  });
  // const { fields, append } = useFieldArray({
  //   control,
  //   name: 'tags'
  // });
  const { data } = useQuery({
    queryKey: ['memberList', boardId],
    queryFn: () => getMemberList(boardId as string)
  });

  const submit = (formData: PostCard) => {
    createCard({
      assigneeUserId: formData.assigneeUserId,
      columnId: modal.columnId,
      dashboardId: Number(boardId),
      description: formData.description,
      dueDate: formData.dueDate,
      title: formData.title,
      tags: ['gawe', 'aseg'],
      imageUrl: undefined
    });
  };

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 생성
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="assigner"
        >
          담당자
        </label>
        <select
          id="assigner"
          className="w-[21.7rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          {...register('assigneeUserId', { valueAsNumber: true })}
        >
          {data?.members.map(member => (
            <option key={member.userId} value={Number(member.userId)}>
              {member.nickname}
            </option>
          ))}
        </select>
        {/* <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <LabelAndInput
              title="제목"
              type="text"
              id="title"
              placeholder="제목을 입력해 주세요."
              star="*"
              {...field} // field 객체에서 제공하는 onChange, onBlur, value를 Input에 전달
              // error={fieldState.error} // fieldState에서 error 상태를 가져와서 Input에 전달
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field, fieldState }) => (
            <LabelAndInput
              title="설명"
              type="text"
              id="description"
              placeholder="설명을 입력해 주세요."
              star="*"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="dueDate"
          render={({ field: { onBlur, onChange, value }, fieldState }) => (
            <LabelAndInput
              title="마감일"
              type="text"
              id="due-date"
              placeholder="날짜를 입력해 주세요."
              onBlur={onBlur}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field, fieldState }) => (
            <LabelAndInput
              title="태그"
              type="text"
              id="tags"
              placeholder="입력 후 Enter"
              {...field}
            />
          )}
        /> */}
        <div className="relative flex flex-col">
          <h2 className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium">
            이미지
          </h2>
          <label
            htmlFor="image"
            className="w-[76px] h-[76px] p-6 bg-neutral-100 rounded-md justify-center items-center inline-flex"
          >
            <img src={plusBtn} alt="버튼" className="h-[2.8rem] w-[2.8rem]" />
          </label>
          <input
            type="file"
            id="image"
            className="hidden"
            {...register('imageUrl')}
          />
        </div>
        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
