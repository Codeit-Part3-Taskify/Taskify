import PasswordFormArea from './PasswordFormArea';
import ProfileFormArea from './ProfileFormArea';

export default function MyPage() {
  return (
    <div className="flex flex-col">
      <a href="/mypage">돌아가기</a>
      <ProfileFormArea />
      <PasswordFormArea />
    </div>
  );
}
