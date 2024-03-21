import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import postPassword from '../../apis/postPassword';
import Button from '../Buttons/Button';

export default function PasswordFormArea() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [showError, setShowError] = useState<string | null>(null);

  const handleBlur = () => {
    if (newPassword !== confirmNewPassword) {
      setShowError('비밀번호가 일치하지 않습니다.');
    } else {
      setShowError('');
    }
  };
  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmNewPassword(event.target.value);
  };
  const handleCurrentPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(event.target.value);
  };

  const { mutate } = useMutation({
    mutationFn: postPassword,
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다.');
    },
    onError: () => {
      alert('비밀번호 변경에 실패했습니다.');
    }
  });
  const handlePostPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log(mutate);
    mutate(newPassword as any);
  };

  return (
    <form className="flex flex-col ml-[1.7rem] w-[620px] h-[454px] bg-white rounded-lg justify-center align-center px-[2.8rem] justify-around  ">
      <div className="text-zinc-800 text-[2.4rem] font-bold font-['Pretendard']">
        비밀번호 변경
      </div>
      <div className="flex flex-col">
        <label
          className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          htmlFor="CurrentPassword"
        >
          현재 비밀번호
        </label>
        <input
          id="CurrentPassword"
          className=" w-[56.4rem] basicinput mb-[2rem]"
          type="password"
          placeholder="현재 비밀번호 입력"
          onChange={handleCurrentPassword}
        />
        <label
          className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          htmlFor="NewPassword"
        >
          새 비밀번호
        </label>
        <input
          id="NewPassword"
          className=" w-[56.4rem] basicinput placeholder-gray-400 mb-[2rem]"
          type="password"
          placeholder="새 비밀번호 입력"
          onChange={handleNewPasswordChange}
        />
        <label
          className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          htmlFor="NewPasswordConfirm"
        >
          새 비밀번호 확인
        </label>
        <input
          id="NewPasswordConfirm"
          className=" w-[56.4rem] basicinput text-gray-400 font-['Pretendard'] mb-[2rem]"
          type="password"
          placeholder="새 비밀번호 입력"
          onChange={handleConfirmNewPasswordChange}
          onBlur={handleBlur}
        />
        {showError && (
          <p className="text-red-500 text-[1.2rem] text-red">{showError}</p>
        )}
        <Button
          variant="primary"
          customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem] ml-auto mb-[2rem]"
          type="button"
          onClick={handlePostPassword}
        >
          변경
        </Button>
      </div>
    </form>
  );
}
