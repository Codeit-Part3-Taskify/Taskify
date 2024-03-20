import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import createDashboards from 'src/apis/createDashboards';
import ModalResetButton from '../Buttons/ModalResetButton';
import ModalSubmitButton from '../Buttons/ModalSubmitButton';
import ColorSelector from '../ColorSelector/ColorSelector';

interface NewPost {
  title: string;
  color: string;
}

export default function CreateDashBoard() {
  // TODO usehooks로 빼기
  const [selectedColor, setSelectedColor] = useState('#7AC555');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const queryClient = useQueryClient();
  const setModalState = useSetAtom(modalAtom);

  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: NewPost) => createDashboards(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dashboards'] });
    }
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue = e.currentTarget.inputId.value.trim();
    if (!inputValue) {
      setErrorMessage('대시보드 이름을 입력하세요.');
      return;
    }

    const newPost = {
      title: e.currentTarget.inputId.value,
      color: selectedColor
    };
    mutate(newPost, {
      onSuccess: () => {
        setModalState(prev => ({ ...prev, status: false }));
      }
    });
  };

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        새로운 대시보드
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          대시보드 이름
        </label>
        <input
          className={`w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] text-[#333236] outline-none text-[1.6rem] ${
            errorMessage ? '' : 'mb-[2.8rem]'
          }`}
          id="inputId"
          type="text"
          placeholder="대시보드 이름을 입력하세요."
        />
        {errorMessage && (
          <p className="text-red_D6173A text-[1.6rem] py-[1rem]">
            {errorMessage}
          </p>
        )}
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <div className="flex justify-end gap-[1.2rem] mt-[2.8rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton disabled={isPending}>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
