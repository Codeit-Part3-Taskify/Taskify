import { Dispatch, SetStateAction } from 'react';
import CheckIcon from 'src/assets/images/check.svg';

interface ColorSelectorProps {
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function ColorSelector({
  selectedColor,
  setSelectedColor
}: ColorSelectorProps) {
  const colors = ['#7AC555', '#760DDE', '#FFA500', '#76A5EA', '#E876EA'];
  const bgColors: {
    [key: string]: string;
  } = {
    '#7AC555': 'bg-green',
    '#760DDE': 'bg-purple',
    '#FFA500': 'bg-orange',
    '#76A5EA': 'bg-blue',
    '#E876EA': 'bg-pink'
  };

  return (
    <div className="flex gap-4">
      {colors.map(color => (
        <button
          key={color}
          className={`${bgColors[color]} w-[3rem] h-[3rem] rounded-full flex justify-center items-center`}
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
