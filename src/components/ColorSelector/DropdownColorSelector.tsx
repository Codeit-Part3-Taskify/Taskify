import { Dispatch, SetStateAction, useState } from 'react';
import CheckIcon from 'src/assets/images/check.svg';
import { COLOR_VARIANTS } from 'src/constants/colors';

interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function DropdownColorSelector({
  selectedColor,
  setSelectedColor
}: ColorSelectorProps) {
  const colors = ['#7AC555', '#760DDE', '#FFA500', '#76A5EA', '#E876EA'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative tablet:hidden">
      <button
        className={`${
          COLOR_VARIANTS[selectedColor as keyof typeof COLOR_VARIANTS]
        } w-[3rem] h-[3rem] rounded-full flex justify-center items-center relative`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        type="button"
      >
        {selectedColor === `${selectedColor}` && (
          <img width={24} height={24} src={CheckIcon} alt="체크 아이콘" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 z-5 mt-[1rem] rounded-[0.8rem] flex gap-[0.3rem]">
          {colors.map(color => (
            <button
              key={color}
              className={`${
                COLOR_VARIANTS[color as keyof typeof COLOR_VARIANTS]
              } w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center`}
              onClick={() => {
                setSelectedColor(color);
                setIsDropdownOpen(false);
              }}
              type="button"
            >
              {selectedColor === color && (
                <img width={24} height={24} src={CheckIcon} alt="체크 아이콘" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
