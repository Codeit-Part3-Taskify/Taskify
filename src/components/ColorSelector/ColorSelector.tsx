import { Dispatch, SetStateAction } from 'react';
import CheckIcon from 'src/assets/images/check.svg';
import { COLOR_VARIANTS } from 'src/constants/colors';

interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function ColorSelector({
  selectedColor,
  setSelectedColor
}: ColorSelectorProps) {
  const colors = ['#7AC555', '#760DDE', '#FFA500', '#76A5EA', '#E876EA'];

  return (
    <div className="flex gap-4">
      {colors.map(color => (
        <button
          key={color}
          className={`${
            COLOR_VARIANTS[color as keyof typeof COLOR_VARIANTS]
          } w-[3rem] h-[3rem] rounded-full flex justify-center items-center`}
          onClick={() => setSelectedColor(color)}
          type="button"
        >
          {selectedColor === `${color}` ? (
            <img width={24} height={24} src={CheckIcon} alt="체크 아이콘" />
          ) : null}
        </button>
      ))}
    </div>
  );
}
