import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';

export default function CreateCard() {
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        할 일 생성
      </h2>
      <form className="flex flex-col">
        <LabelAndInput
          title="담당자"
          type="text"
          id="assigner"
          placeholder="이름을 입력하세요."
        />
        <LabelAndInput
          title="제목"
          type="text"
          id="title"
          placeholder="제목을 입력해 주세요."
          star="*"
        />
        <LabelAndInput
          title="설명"
          type="text"
          id="description"
          placeholder="설명을 입력해 주세요."
          star="*"
        />
        <LabelAndInput
          title="마감일"
          type="datetime-local"
          id="due-date"
          placeholder="날짜를 입력해 주세요."
        />
        <LabelAndInput
          title="태그"
          type="text"
          id="tags"
          placeholder="입력 후 Enter"
        />
        <LabelAndInput title="이미지" type="file" id="image" />
        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
