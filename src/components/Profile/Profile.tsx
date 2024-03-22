import { useEffect, useState } from 'react';

interface ProfileProps {
  profileImgSrc?: string | null;
  userName?: string;
  isSmall?: boolean;
}
const basicSize = 'w-[3.8rem] h-[3.8rem]';
const smallSize = 'w-[3.4rem] h-[3.4rem]';
export default function Profile({
  profileImgSrc,
  userName = '코드잇',
  isSmall
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
            className={`rounded-full ${isSmall ? smallSize : basicSize}`}
            src={profileImgSrc}
            alt="프로필 이미지"
          />
        ) : (
          <>
            <div
              className={`${randomBgColor} rounded-full  ${
                isSmall ? smallSize : basicSize
              }`}
            />
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 tablet:text-[1.6rem] text-[1.4rem] font-semibold text-white">
              {firstLetterOfNickName}
            </span>
          </>
        )}
      </div>
      {userName ? (
        <span className="tablet:text-[1.6rem] text-[1.4rem]">{userName}</span>
      ) : null}
    </div>
  );
}
