import PasswordFormArea from 'src/components/MyPage/PasswordFormArea';
import ProfileFormArea from 'src/components/MyPage/ProfileFormArea';
import ReturnButton from 'src/components/Buttons/ReturnButton';
import { Helmet } from 'react-helmet-async';

export default function MyPage() {
  return (
    <div>
      <Helmet>
        <title>Taskify Mypage</title>
      </Helmet>
      <div className="m-5">
        <ReturnButton />
      </div>
      <ProfileFormArea />
      <PasswordFormArea />
    </div>
  );
}
