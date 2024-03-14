import { useState } from 'react';
import CheckIcon from '../../assets/images/check.svg';

export default function ColorSelector() {
  const colors = ['green', 'purple', 'orange', 'blue', 'pink'];
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="flex gap-4">
      {colors.map(color => (
        <button
          key={color}
          className={`bg-${color} w-[3rem] h-[3rem] rounded-full flex justify-center items-center`}
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
