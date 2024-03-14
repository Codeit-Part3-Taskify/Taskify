import plusBtn from '../../assets/images/plus.svg';

export default function AddCard() {
  return (
    <button className="mt-[2.5rem] p-[0.9rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] flex justify-center">
      <img
        src={plusBtn}
        alt="더하기 버튼"
        className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
      />
    </button>
  );
}
