import { FormEvent, useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useUpdateDashboardTitle } from 'src/hooks/useUpdateDashboardTitle';
import Button from '../Buttons/Button';
import ColorSelector from '../ColorSelector/ColorSelector';
import DropdownColorSelector from '../ColorSelector/DropdownColorSelector';

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
    <section className="md:px-[2.8rem] px-[2rem] desktop:pt-[2.9rem] tablet:pt-[2.6rem] mobile:pt-[2.5rem] tablet:pb-[2.8rem] pb-[2.1rem] bg-white rounded-[0.8rem] desktop:w-[62rem] tablet:w-[54.4rem] w-[28.4rem]">
      <div className="flex justify-between tablet:mb-[3.7rem] mb-[2.4rem]">
        <h1 className="font-bold text-black_333236 text-[2rem] font-['Pretendard-700']">
          비브리지
        </h1>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          customStyle="hidden tablet:flex"
        />
        <DropdownColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label
          className="text-[1.6rem] tablet:text-[1.8rem] text-black_333236 mb-[1rem] font-['Pretendard-500']"
          htmlFor="editDashboardName"
        >
          대시보드 이름
        </label>
        <input
          className="desktop:w-[56.4rem] tablet:w-[48.8rem] mobile:w-[24.4rem] tablet:h-[4.8rem] h-[4.2rem] border border-gray_D9D9D9 bg-white rounded-[0.6rem] px-[1.6rem] tablet:py-[1.4rem] py-[1.3rem] mb-7 text-black_333236 font-['Pretendard-400'] outline-none placeholder:text-gray_9FA6B2 tablet:text-[1.6rem] text-[1.4rem]"
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
            customStyles="tablet:px-[2.9rem] px-[2.5rem] py-[0.7rem] tablet:text-[1.4rem] text-[1.2rem] rounded-[0.4rem]"
            disabled={isPending}
          >
            변경
          </Button>
        </div>
      </form>
    </section>
  );
}
