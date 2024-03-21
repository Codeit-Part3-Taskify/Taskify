import { FormEvent, useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useUpdateDashboardTitle } from 'src/hooks/useUpdateDashboardTitle';
import Button from '../Buttons/Button';
import ColorSelector from '../ColorSelector/ColorSelector';

export default function EditDashboardTitle() {
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { boardId } = useParams<Params>();
  const { data, mutate, isPending } = useUpdateDashboardTitle(boardId);

  useEffect(() => {
    setSelectedColor(data?.color ?? '');
    setInputValue(data?.title ?? '');
  }, [data]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ dashboardId: boardId, title: inputValue, color: selectedColor });
  };

  return (
    <section className="px-[2.8rem] pt-[2.9rem] pb-[2.8rem] bg-white rounded-[0.8rem] w-[62rem]">
      <div className="flex justify-between ">
        <h1 className="font-bold text-black_333236 mb-[32px] text-[2rem] font-['Pretendard-700']">
          비브리지
        </h1>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label
          className="text-[1.8rem] text-black_333236 mb-2.5 font-['Pretendard-500']"
          htmlFor="editDashboardName"
        >
          대시보드 이름
        </label>
        <input
          className="w-[564px] h-[4.8rem] border border-gray_D9D9D9 bg-white rounded-[0.6rem] px-4 mb-7 text-black_333236 font-['Pretendard-400'] outline-none placeholder:text-gray_9FA6B2 text-[1.6rem]"
          id="editDashboardName"
          type="text"
          placeholder="제목을 설정해 주세요."
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          required
        />
        <div className="flex justify-end">
          <Button
            variant="primary"
            customStyles="px-[2.9rem] py-[0.7rem] text-[1.4rem] rounded-[0.4rem]"
            disabled={isPending}
          >
            변경
          </Button>
        </div>
      </form>
    </section>
  );
}
