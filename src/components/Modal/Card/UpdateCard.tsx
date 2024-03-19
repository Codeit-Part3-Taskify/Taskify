// 작업중

import { useState } from 'react';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';

export default function UpdateCard() {
  const [value, setValue] = useState('');

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 수정
      </h2>
      <form className="flex flex-col">
        <section className="flex justify-between">
          <LabelAndInput
            title="상태"
            type="text"
            id="condition"
            placeholder="상태"
            custom="w-[21.7rem]"
            value={value}
            setValue={setValue}
          />
          <LabelAndInput
            title="담당자"
            type="text"
            id="assigner"
            placeholder="제목을 입력해 주세요."
            star="*"
            custom="w-[21.7rem]"
            value={value}
            setValue={setValue}
          />
        </section>
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          제목
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="제목을 입력해 주세요."
        />
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          설명
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="설명을 입력해 주세요."
        />
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          마감일
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="날짜를 입력해 주세요."
        />
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          태그
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="입력 후 Enter"
        />
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          이미지
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="file"
        />
        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
