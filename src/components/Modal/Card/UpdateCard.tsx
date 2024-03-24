import { Controller } from 'react-hook-form';
import type { ColumnData } from 'src/types/columnTypes';
import ReactDatePicker from 'react-datepicker';
import calendar from 'src/assets/images/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import plusBtn from 'src/assets/images/plus.svg';
import { BasicStyle } from 'src/constants/inputstyle';
import useUpdateCard from 'src/hooks/useUpdateCard';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

export default function updateCard() {
  const {
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
    setValue,
    handleTagDelete
  } = useUpdateCard();
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
              담당자
            </label>
            <select
              id="assigner"
              className="w-[21.7rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
              {...register('assigneeUserId', { valueAsNumber: true })}
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
                dateFormat="yyyy-MM-dd HH:mm"
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
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
              <button type="button">X</button>
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
