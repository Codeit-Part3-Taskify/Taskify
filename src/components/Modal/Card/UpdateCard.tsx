import type { ColumnData } from 'src/types/columnTypes';
import 'react-datepicker/dist/react-datepicker.css';
import plusBtn from 'src/assets/images/plus.svg';
import { useState } from 'react';
import { BasicStyle } from 'src/constants/inputstyle';
import useUpdateCard from 'src/hooks/useUpdateCard';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';
import Calendar from './Calendar';

export default function updateCard() {
  const {
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
  } = useUpdateCard();
  const [calendarState, setCalendarState] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        <p className="absolute text-red-500 text-[1.2rem]">
          {errors.assigneeUserId?.message ||
            errors.title?.message ||
            errors.description?.message}
        </p>
      </div>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 수정
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
                  {board.title}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex flex-col">
            <label
              className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
              htmlFor="assigner"
            >
              담당자 *
            </label>
            <select
              id="assigner"
              className="w-[21.7rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
              {...register('assigneeUserId', {
                valueAsNumber: true,
                required: { value: true, message: '담당자를 선택해주세요.' }
              })}
            >
              {memberListQeury?.members.map(member => (
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
            {...register('title', {
              required: { value: true, message: '제목을 입력해 주세요.' }
            })}
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
            {...register('description', {
              required: { value: true, message: '설명을 입력해 주세요.' }
            })}
          />
        </div>

        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="due-date"
          >
            마감일
          </label>
          <input
            id="due-date"
            onFocus={() => setCalendarState(true)}
            className={BasicStyle}
            value={getValues('dueDate')?.slice(0, 10)}
          />
          {calendarState && (
            <Calendar setValue={setValue} setCalendarState={setCalendarState} />
          )}
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
                    <li key={key}>
                      {item}
                      <button
                        type="button"
                        className="bg-[black] text-white p-2 rounded-[0.6rem]"
                        onClick={() => handleTagDelete(item)}
                      >
                        x
                      </button>
                    </li>
                  );
                })}
            </ul>
            <input
              className="outline-none ml-[1rem]"
              id="tags"
              placeholder="입력 후 엔터."
              value={tagValue}
              onChange={e => setTagValue(e.target.value)}
              onKeyDown={e => {
                if (e.nativeEvent.isComposing) return;
                if (e.key === 'Enter') {
                  const inputElement = e.target as HTMLInputElement;
                  e.preventDefault();
                  setTagList(prev => [...(prev as string[]), tagValue]);
                  const list = [...(tagList as string[]), inputElement.value];
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
            <div className="flex">
              <label htmlFor="image">
                <img
                  src={imageValue}
                  alt="imageValue"
                  className="w-[7.6rem] h-[7.6rem] rounded-md"
                />
              </label>
              <button
                type="button"
                className="bg-[black] text-white p-2 rounded-[0.6rem]"
                onClick={() => setImageValue('')}
              >
                X
              </button>
            </div>
          ) : (
            <label
              htmlFor="image"
              className="w-[7.6rem] h-[7.6rem] p-6 bg-neutral-100 rounded-md justify-center items-center inline-flex"
            >
              <img src={plusBtn} alt="버튼" className="h-[2.8rem] w-[2.8rem]" />
            </label>
          )}
          <input
            accept="image/*"
            type="file"
            id="image"
            className="hidden"
            {...register('imageUrl')}
            onChange={handleChangeImage}
          />
        </div>
        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton>수정</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
