import { useState } from 'react';
import CheckIcon from 'src/assets/images/check.svg';

interface ColorSelectorProps {
  onColorSelect: (color: string) => void;
}

type Color = 'green' | 'purple' | 'orange' | 'blue' | 'pink';

const colors: Record<Color, string> = {
  green: '#7AC555',
  purple: '#760DDE',
  orange: '#FFA500',
  blue: '#76A5EA',
  pink: '#E876EA'
};

export default function ColorSelector({ onColorSelect }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState('#7AC555');

  const handleColorSelect = (hex: string) => {
    setSelectedColor(hex);
    onColorSelect(hex);
  };

  return (
    <div className="flex gap-4">
      {Object.entries(colors).map(([color, hex]) => (
        <button
          key={color}
          className={`bg-${color} w-[3rem] h-[3rem] rounded-full flex justify-center items-center`}
          onClick={() => handleColorSelect(hex)}
          type="button"
        >
          {selectedColor === `${hex}` ? (
            <img width={24} height={24} src={CheckIcon} alt="체크 아이콘" />
          ) : null}
        </button>
      ))}
    </div>
  );
}
