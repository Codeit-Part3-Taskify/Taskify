import ProfileInputBox from './ProfileInputBox';

export default function ProfileFormArea() {
  return (
    <form className="w-[620px] h-[355px] bg-white rounded-lg">
      <div className="text-zinc-800 text-2xl font-bold font-['Pretendard']">
        프로필
      </div>
      <ProfileInputBox />
    </form>
  );
}
