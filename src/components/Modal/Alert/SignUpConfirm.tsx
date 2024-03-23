import { Link } from 'react-router-dom';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

export default function SignUpConfirm() {
  return (
    <>
      <h3 className="flex items-center justify-center mt-[7.6rem] pb-[4.5rem] mx-[11.2rem] text-[1.8rem] font-medium">
        가입이 완료되었습니다!
      </h3>
      <div className="flex justify-end">
        <Link to="/login">
          <ModalSubmitButton>확인</ModalSubmitButton>
        </Link>
      </div>
    </>
  );
}
