import useInviteMember from 'src/hooks/useInviteMember';
import ModalResetButton from '../Buttons/ModalResetButton';
import ModalSubmitButton from '../Buttons/ModalSubmitButton';

export default function InviteMember() {
  const { handleFormSubmit, handleInputChange, errorMessage } =
    useInviteMember();

  return (
    <>
      <h2 className="text-[#333236] tablet:mb-[3.2rem] mb-[2.4rem] tablet:text-[2.4rem] text-[2rem] font-bold">
        초대하기
      </h2>
      <form className="relative flex flex-col" onSubmit={handleFormSubmit}>
        <label
          className="tablet:text-[1.8rem] text-[1.6rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          이메일
        </label>
        <input
          className="tablet:w-[48.4rem] tablet:h-[4.8rem] w-[28.7rem] h-[4.2rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] text-[#333236] outline-none placeholder:text-[#333236] tablet:text-[1.6rem] text-[1.4rem]"
          id="inputId"
          type="email"
          placeholder="codeit@codeit.com"
          onChange={e => handleInputChange(e)}
          required
        />
        {errorMessage && (
          <p className="text-red_D6173A text-[1.6rem] py-[1rem]">
            {errorMessage}
          </p>
        )}
        <div className="flex tablet:justify-end justify-center tablet:gap-[1.2rem] gap-[1.1rem] tablet:mt-[2.8rem] mt-[2.4rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton>초대</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
