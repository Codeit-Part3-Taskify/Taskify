import PasswordFormArea from 'src/components/MyPage/PasswordFormArea';
import ProfileFormArea from 'src/components/MyPage/ProfileFormArea';
import ReturnButton from 'src/components/Buttons/ReturnButton';

export default function MyPage() {
  return (
    <div>
      <div className="m-5">
        <ReturnButton />
      </div>
      <ProfileFormArea />
      <PasswordFormArea />
    </div>
  );
}
