import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

export default function AlertPassword() {
  return (
    <>
      <h3 className="flex items-center justify-center mt-[7.6rem] pb-[4.5rem] mx-[11.2rem] text-[1.8rem] font-medium">
        비밀번호가 일치하지 않습니다.
      </h3>
      <div className="flex justify-end">
        <ModalSubmitButton>확인</ModalSubmitButton>
      </div>
    </>
  );
}
