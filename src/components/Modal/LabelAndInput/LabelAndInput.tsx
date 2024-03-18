import plusBtn from 'src/assets/images/plus.svg';
import { useState } from 'react';

interface Props {
  title: string;
  type: string;
  id: string;
  star?: string;
  placeholder?: string;
}
const basicStyle =
  'w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]';
export default function LabelAndInput({
  title,
  type,
  id,
  placeholder,
  star
}: Props) {
  const [value, setValue] = useState('');
  return (
    <>
      <label
        className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
        htmlFor={id}
      >
        {title} {star}
      </label>
      <input
        className={`${basicStyle} ${id === 'image' && 'hidden'}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={id}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {id === 'image' && (
        <label
          htmlFor={id}
          className="w-[76px] h-[76px] p-6 bg-neutral-100 rounded-md justify-center items-center inline-flex"
        >
          <img src={plusBtn} alt="버튼" className="h-[2.8rem] w-[2.8rem]" />
        </label>
      )}
    </>
  );
}
