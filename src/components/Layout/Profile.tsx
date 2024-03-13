import { useEffect, useState } from 'react';

interface Props {
  profileImgSrc?: string;
  email?: string;
  userName?: string;
}

export default function Profile({
  profileImgSrc,
  email = 'Test@codeit.kr',
  userName = '코드잇'
}: Props) {
  const [randomBgColor, setRandomBgColor] = useState('');
  const firstLetterOfEmail = email?.charAt(0);

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
    <div className="flex items-center justify-center gap-4">
      <div className="relative">
        {profileImgSrc ? (
          <img
            className="rounded-full w-[3.8rem] h-[3.8rem]"
            src={profileImgSrc}
            alt="프로필 이미지"
          />
        ) : (
          <>
            <div
              className={`${randomBgColor} rounded-full  w-[3.8rem] h-[3.8rem]`}
            />
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[1.6rem] font-semibold">
              {firstLetterOfEmail}
            </span>
          </>
        )}
      </div>
      {userName ? <span className="text-[1.6rem]">{userName}</span> : null}
    </div>
  );
}
