import { useMemo, useState } from 'react';
import { StringMap } from '@/types/common';

interface Props {
  colors: string[];
}

export default function ColorSelector({ colors }: Props) {
  const [selectedColor, setSelectedColor] = useState('');

  const bgColors: StringMap = useMemo(
    () =>
      colors.reduce((acc: StringMap, cur) => {
        acc[cur] = `bg-${cur}`;
        return acc;
      }, {}),
    [colors]
  );

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
            <img
              width={24}
              height={24}
              src="/images/check.svg"
              alt="체크 아이콘"
            />
          ) : null}
        </button>
      ))}
    </div>
  );
}
