import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
import getUserInfo from 'src/apis/getUserInfo';
import postImage from 'src/apis/postImage';
import putUserInfo from 'src/apis/putUserInfo';
import { userEmailAtom } from 'src/store/store';
import crossbutton from '../../assets/images/cross-button.svg';
import Button from '../Buttons/Button';
// import xbutton from '../../assets/images/x-button.svg';

export default function ProfileFormArea() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo
  });

  const [nickname, setNickname] = useState(data?.nickname);
  const [fileData, setFileData] = useState<File | null>(null);
  const email = useAtomValue(userEmailAtom);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const { mutate: mutate1 } = useMutation({
    mutationFn: postImage,
    onSuccess: url => {
      setProfileImageUrl(url.profileImageUrl);
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      const file = files[0];
      setProfileImageUrl(URL.createObjectURL(file));

      setFileData(file);
      mutate1(file as any);
      // 파일 처리 로직
    }
  };

  const { mutate: mutate2 } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    }
  });

  const handlePutUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate2({ nickname, profileImageUrl } as any);
  };

  return (
    <form className="mobile:w-[28.4rem] mobile:h-[42.2rem]  tablet:w-[54.4rem] w-[620px] h-[355px] bg-white rounded-lg flex flex-col mb-[1.2rem] ml-[1.7rem] justify-around px-[2.8rem]">
      <div className="text-zinc-800 text-[2.4rem] font-bold font-['Pretendard']">
        프로필
      </div>
      <div className="flex flex-row mobile:flex-col tablet:flex-row">
        <div className="tablet:w-[18.2rem] tablet:h-[18.2rem] bg-[#F5F5F5] mobile:w-[10rem] mobile:h-[10rem] ">
          <label
            htmlFor="file"
            className="bg-cover z-10 object-contain relative"
          >
            {profileImageUrl ? (
              <>
                <img
                  src={profileImageUrl || ''}
                  alt="profile"
                  className=" z-30 object-contain"
                />
                <button className="bg-[url(./assets/images/x-button.svg)] bg-cover bg-[violet] w-[3rem] h-[3rem] absolute top-0 right-0 z-50" />
              </>
            ) : (
              <img
                src={crossbutton}
                alt="cross"
                className="w-[100%] h-[100%]"
              />
            )}
          </label>
          <input
            id="file"
            type="file"
            className="hidden z-50"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex flex-col tablet:ml-[1.6rem] w-[36.6rem] mobile:w-[22.4rem] mobile:ml-0 ">
          <label
            htmlFor="EmailInput"
            className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          >
            이메일
          </label>
          <input
            id="EmailInput"
            className="basicinput mb-[2rem]"
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
            className="basicinput"
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
