import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMemberList } from 'src/apis/getMemberList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import { createCard } from 'src/apis/createCard';
import type { PostCard } from 'src/types/cardTypes';
import { modalAtom } from 'src/store/store';
import { uploadCardImage } from 'src/apis/uploadCardImage';
import { useAtom } from 'jotai';
import ReactDatePicker from 'react-datepicker';
import calendar from 'src/assets/images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import plusBtn from 'src/assets/images/plus.svg';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

const BasicStyle = `w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] p-[1.5rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]`;

export default function CreateCard() {
  const [modal, setModal] = useAtom(modalAtom);
  const queryClient = useQueryClient();
  const { boardId } = useParams();
  const { register, setValue, control, handleSubmit } = useForm<PostCard>({
    mode: 'onSubmit',
    defaultValues: {
      dashboardId: Number(boardId),
      columnId: modal.columnId
    }
  });
  const { data } = useQuery({
    queryKey: ['memberList', boardId],
    queryFn: () => getMemberList(boardId as string)
  });
  const [selecTedDate, setSelectedDate] = useState(new Date());
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState<string>('');
  const handleChange = (dateChange: Date) => {
    setValue('dueDate', moment(dateChange).format('yyyy-MM-DD hh:mm'), {
      shouldDirty: true
    });
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

  const [imageValue, setImageValue] = useState('');

  const onChangeImage = (event: BaseSyntheticEvent) => {
    setImageValue(URL.createObjectURL(event.target.files[0]));
    setValue('imageUrl', event.target.files[0]);
  };

  const submit = async (formData: PostCard) => {
    const { imageUrl } = await uploadCardImage(
      modal.columnId,
      formData.imageUrl
    );
    await createCardMutation({ ...formData, imageUrl });
    setModal(prev => ({ ...prev, status: false }));
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
          담당자 *
        </label>
        <select
          id="assigner"
          className="w-[21.7rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          {...register('assigneeUserId', { valueAsNumber: true })}
        >
          <option value="" hidden>
            선택해주세요.
          </option>
          {data?.members.map(member => (
            <option
              key={member.userId}
              value={member.userId}
              defaultValue={member.userId}
            >
              {member.nickname}
            </option>
          ))}
        </select>

        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="title"
          >
            제목 *
          </label>
          <input
            className={BasicStyle}
            id="title"
            placeholder="제목을 입력해 주세요."
            {...register('title')}
          />
        </div>

        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="description"
          >
            설명 *
          </label>
          <textarea
            className={`${BasicStyle} h-[9.6rem] resize-none`}
            id="description"
            placeholder="설명을 입력해 주세요."
            {...register('description')}
          />
        </div>

        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="due-data"
          >
            마감일
          </label>
          <Controller
            control={control}
            name="dueDate"
            render={() => (
              <ReactDatePicker
                showIcon
                icon={calendar}
                className={`${BasicStyle}`}
                closeOnScroll // 스크롤 하면 선택box 닫히게
                showTimeSelect // 시간 나오게 하기
                timeFormat="HH:mm" // 시간 포맷
                timeIntervals={15} // 15분 단위로 선택 가능한 box가 나옴
                timeCaption="time"
                onChange={handleChange}
                selected={selecTedDate}
                dateFormat="yyyy-MM-dd hh:mm"
              />
            )}
          />
        </div>
        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="tags"
          >
            태그
          </label>
          <div
            className={`${BasicStyle} flex overflow-x-scroll overflow-y-hidden items-center`}
          >
            <ul className="flex gap-[1rem] overflow-hidden shrink-0">
              {tagList &&
                tagList.map(item => {
                  const key = Math.random();
                  return <li key={key}>{item}</li>;
                })}
            </ul>
            <input
              className="outline-none ml-[1rem]"
              id="tags"
              placeholder="입력 후 엔터."
              value={tagValue}
              onChange={e => setTagValue(e.target.value)}
              // 타입 찾아야 함
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  setTagList(prev => [...prev, tagValue]);

                  const list = [...tagList, e.target.value];
                  setValue('tags', list);
                  setTagValue('');
                }
              }}
            />
          </div>
        </div>

        <div className="relative flex flex-col">
          <h2 className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium">
            이미지
          </h2>
          {imageValue ? (
            <label htmlFor="image">
              <img
                src={imageValue}
                alt="imageValue"
                className="w-[7.6rem] h-[7.6rem]"
              />
            </label>
          ) : (
            <label
              htmlFor="image"
              className="w-[7.6rem] h-[7.6rem] p-6 bg-neutral-100 rounded-md justify-center items-center inline-flex"
            >
              <img src={plusBtn} alt="버튼" className="h-[2.8rem] w-[2.8rem]" />
            </label>
          )}
          <input
            type="file"
            id="image"
            className="hidden"
            {...register('imageUrl')}
            onChange={onChangeImage}
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
