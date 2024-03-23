import { useEffect, useState } from 'react';

interface ProfileProps {
  profileImgSrc?: string | null;
  userName?: string;
  size: 'basicSize' | 'smallSize';
  border: 'white' | 'none';
  isNameVisible?:
    | 'visible'
    | 'invisible'
    | 'mobileInvisible'
    | 'tabletInvisible';
}

const userNameVisible = {
  visible: '',
  invisible: 'hidden',
  mobileInvisible: 'hidden tablet:flex',
  tabletInvisible: 'hidden desktop:flex'
};

const borderColor = {
  white: 'border border-[0.2rem] border-white',
  none: ''
};

const profile = {
  basicSize: 'tablet:w-[3.8rem] tablet:h-[3.8rem] w-[3.4rem] h-[3.4rem]',
  smallSize: 'w-[3.4rem] h-[3.4rem]'
};
const text = {
  basicSize: 'tablet:text-[1.6rem] text-[1.4rem]',
  smallSize: 'text-[1.4rem]'
};

export default function Profile({
  profileImgSrc,
  userName,
  size = 'basicSize',
  border = 'none',
  isNameVisible = 'visible'
}: ProfileProps) {
  const [randomBgColor, setRandomBgColor] = useState('');
  const firstLetterOfNickName = userName?.charAt(0).toUpperCase();

  useEffect(() => {
    // profileImgSrc 없을 시 랜덤 배경색
    const bgColors = [
      'bg-brown_C4B1A2',
      'bg-skyblue_9DD7ED',
      'bg-yellow_FDD446',
      'bg-yellow_FFC85A'
    ];
    const randomBgColorsIndex = Math.floor(Math.random() * bgColors.length);
    setRandomBgColor(bgColors[randomBgColorsIndex]);
  }, []);

  return (
    <div className="flex items-center justify-center tablet:gap-[1.2rem] gap-[0.8rem]">
      <div className="relative">
        {profileImgSrc ? (
          <img
            className={`rounded-full ${profile[size]} ${borderColor[border]}`}
            src={profileImgSrc}
            alt="프로필 이미지"
          />
        ) : (
          <>
            <div
              className={`${randomBgColor} rounded-full  ${profile[size]}  ${borderColor[border]}`}
            />
            <span
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${text[size]} font-semibold text-white`}
            >
              {firstLetterOfNickName}
            </span>
          </>
        )}
      </div>
      <span
        className={`tablet:text-[1.6rem] text-[1.4rem] ${userNameVisible[isNameVisible]}`}
      >
        {userName}
      </span>
    </div>
  );
}
