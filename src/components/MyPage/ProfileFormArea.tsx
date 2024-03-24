import { useMutation, useQuery } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import getUserInfo from 'src/apis/getUserInfo';
import putUserInfo from 'src/apis/putUserInfo';
import { userEmailAtom } from 'src/store/store';
import Button from '../Buttons/Button';

export default function ProfileFormArea() {
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo
  });
  const [nickname, setNickname] = useState(data?.nickname || '');

  const email = useAtomValue(userEmailAtom);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      // 파일이 존재하는 경우에만 처리
      // files는 null이 아니며, length 속성이 존재함
      const file = files[0];
      setProfileImageUrl(URL.createObjectURL(file));
      // 파일 처리 로직
    }
  };

  const { mutate } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: () => {}
  });

  const handlePutUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate({ nickname, profileImageUrl } as any);
  };

  return (
    <form className="w-[620px] h-[355px] bg-white rounded-lg flex flex-col mb-[1.2rem] ml-[1.7rem] justify-around px-[2.8rem]">
      <div className="text-zinc-800 text-[2.4rem] font-bold font-['Pretendard']">
        프로필
      </div>
      <div className="flex flex-row relative">
        <div className="w-[18.2rem] h-[18.2rem] bg-[#F5F5F5] relative " />
        {profileImageUrl && (
          <img
            src={profileImageUrl || ''}
            alt="profile"
            className="w-[18.2rem] h-[18.2rem] absolute z-50"
          />
        )}
        <label
          htmlFor="file"
          className="absolute left-[7.5rem] top-[7.5rem]  file-selector-button: bg-[url('./assets/images/cross-button.svg')] bg-cover w-[3rem] h-[3rem]"
        />
        <input
          id="file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="flex flex-col ml-[1.6rem]">
          <label
            htmlFor="EmailInput"
            className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          >
            이메일
          </label>
          <input
            id="EmailInput"
            className="basicinput w-[36.6rem] mb-[2rem]"
            type="text"
            readOnly
            value={data?.email || email}
          />
          <label
            htmlFor="NicknameInput"
            className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          >
            닉네임
          </label>
          <input
            id="NicknameInput"
            className="basicinput w-[36.6rem]"
            type="text"
            defaultValue={data?.nickname || ''}
            onChange={e => setNickname(e.target.value)}
          />
        </div>
      </div>
      <Button
        variant="primary"
        type="button"
        customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem] ml-auto mb-[2rem]"
        onClick={handlePutUserInfo}
      >
        저장
      </Button>
    </form>
  );
}
