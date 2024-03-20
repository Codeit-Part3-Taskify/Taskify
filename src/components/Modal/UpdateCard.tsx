// 작업중

import ModalResetButton from '../Buttons/ModalResetButton';
import ModalSubmitButton from '../Buttons/ModalSubmitButton';

export default function UpdateCard() {
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 수정
      </h2>
      <form className="flex flex-col">
        <div className="block">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="assigner"
          >
            상태
          </label>
          <input
            className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none  text-[1.6rem]"
            id="asigner"
            type="text"
            placeholder="이름을 입력해 주세요"
          />
        </div>
        <div>
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="assigner"
          >
            담당자
          </label>
          <input
            className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none  text-[1.6rem]"
            id="asigner"
            type="text"
            placeholder="이름을 입력해 주세요"
          />
        </div>
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
          id="inputId"
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
