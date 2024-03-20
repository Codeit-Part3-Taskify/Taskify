import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import createDashboards from 'src/apis/createDashboards';
import ModalResetButton from '../Buttons/ModalResetButton';
import ModalSubmitButton from '../Buttons/ModalSubmitButton';
import ColorSelector from '../ColorSelector/ColorSelector';

interface CreateDashBoardProps {
  onClose: () => void;
}

interface NewPost {
  title: string;
  color: string;
}

export default function CreateDashBoard({ onClose }: CreateDashBoardProps) {
  // TODO
  // usehooks로 빼기
  const [selectedColor, setSelectedColor] = useState('#7AC555');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const queryClient = useQueryClient();

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
        onClose();
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
          <p className="text-red text-[1.6rem] py-[1rem]">{errorMessage}</p>
        )}
        <ColorSelector onColorSelect={setSelectedColor} />
        <div className="flex justify-end gap-[1.2rem] mt-[2.8rem]">
          <ModalResetButton onClick={onClose}>취소</ModalResetButton>
          <ModalSubmitButton disabled={isPending}>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
