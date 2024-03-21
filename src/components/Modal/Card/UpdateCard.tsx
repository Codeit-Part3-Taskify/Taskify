import { BaseSyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMemberList } from 'src/apis/getMemberList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import readCardDetail from 'src/apis/readCardDetail';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import type { CardData, PostCard } from 'src/types/cardTypes';
import { modalAtom } from 'src/store/store';
import { uploadCardImage } from 'src/apis/uploadCardImage';
import { useAtom } from 'jotai';
import { updateCardData } from 'src/apis/updateCardData';
import type { ColumnData } from 'src/types/columnTypes';
import readColumnList from 'src/apis/readColumnList';
import ReactDatePicker from 'react-datepicker';
import calendar from 'src/assets/images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import plusBtn from 'src/assets/images/plus.svg';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

const BasicStyle = `w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] p-[1.5rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]`;

export default function updateCard() {
  const [modal, setModal] = useAtom(modalAtom);
  const { boardId } = useParams();

  const { register, setValue, control, handleSubmit, getValues } =
    useForm<PostCard>({
      mode: 'onSubmit'
      //   title: cardQueryData?.title,
      //   description: cardQueryData?.description,
      //   dueDate: cardQueryData?.dueDate,
      //   tags: cardQueryData?.tags,
      //   imageUrl: cardQueryData?.imageUrl
    });
  const [tagList, setTagList] = useState<PostCard['tags']>([]);
  const [imageValue, setImageValue] = useState<PostCard['imageUrl']>();
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
      console.log(getValues());
      return cardData;
    }
  });
  // setValue(cardData);

  const query = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['memberList', boardId],
    queryFn: () => getMemberList(boardId as string)
  });

  const [selecTedDate, setSelectedDate] = useState(new Date());

  const [tagValue, setTagValue] = useState<string>('');

  const deleteTag = (e: any) => {
    // setTagList(
    //   tagList?.map(tag => {
    //     if (tag !== e.target.value) return tag;
    //   })
    // );
  };
  const handleChange = (dateChange: Date) => {
    setValue('dueDate', moment(dateChange).format('yyyy-MM-DD hh:mm'));
    setSelectedDate(dateChange);
  };

  const { mutateAsync: updateCardMutation } = useMutation<
    void,
    Error,
    { cardId: number; body: PostCard }
  >({
    mutationFn: ({ cardId, body }) => updateCardData(cardId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCardList'] });
    }
  });

  const submit = async (formData: PostCard) => {
    const { imageUrl } = await uploadCardImage(
      modal.columnId,
      formData.imageUrl
    );
    const body = { ...formData, imageUrl };
    await updateCardMutation({ cardId: modal.cardId, body });
    setModal(prev => ({ ...prev, status: false }));
  };
  const onChangeImage = (event: BaseSyntheticEvent) => {
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    setImageValue(imgUrl);
    setValue('imageUrl', event.target.files[0]);
  };

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 생성
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <div className="flex gap-[1.6rem]">
          <div className="relative flex flex-col">
            <label
              className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
              htmlFor="assigner"
            >
              상태
            </label>
            <select
              id="assigner"
              className="w-[21.7rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
              {...register('columnId', { valueAsNumber: true })}
            >
              {query.data.data.map((board: ColumnData) => (
                <option key={board.id} value={board.id}>
                  {board.title} {board.id}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex flex-col">
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
                <option key={member.userId} value={member.userId}>
                  {member.nickname}
                </option>
              ))}
            </select>
          </div>
        </div>

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
                  return (
                    <button key={key} type="button" onClick={deleteTag}>
                      <li>{item}</li>
                    </button>
                  );
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
                  setTagList(prev => [...(prev as any), tagValue]);

                  const list = [...(tagList as any), e.target.value];
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
