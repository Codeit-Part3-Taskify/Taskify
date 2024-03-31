import setting from 'src/assets/images/setting.svg';
import addBox from 'src/assets/images/add-box.svg';
import board from 'src/assets/images/calendar.svg';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import { Params, useNavigate, useParams } from 'react-router-dom';
import Button from '../Buttons/Button';

export default function NavButtons() {
  const setModal = useSetAtom(modalAtom);
  const navigate = useNavigate();
  const { boardId } = useParams<Params>();

  return (
    <div className="flex desktop:gap-[1.6rem] tablet:gap-[1.2rem] gap-[0.6rem] text-gray_787486">
      <Button
        variant="ghost"
        type="button"
        onClick={() => navigate(`/mydashboard`)}
        prefix={
          <img
            src={board}
            alt="대시보드 이미지"
            className="hidden tablet:flex"
          />
        }
        customStyles="flex items-center text-[1.4rem] desktop:text-[1.6rem] font-medium gap-[0.8rem] tablet:rounded-[0.8rem] rounded-[0.6rem] px-[1.2rem] pt-[0.6rem] pb-[0.7rem] tablet:px-[1.6rem] tablet:pt-[0.8rem] tablet:pb-[0.9rem] desktop:py-[1rem] h-[3rem] tablet:h-[3.6rem] desktop:h-[4rem]"
      >
        내 대시보드
      </Button>
      <Button
        variant="ghost"
        type="button"
        onClick={() => navigate(`/dashboard/${boardId}/edit`)}
        prefix={
          <img src={setting} alt="톱니 이미지" className="hidden tablet:flex" />
        }
        customStyles="flex items-center text-[1.4rem] desktop:text-[1.6rem] font-medium gap-[0.8rem] tablet:rounded-[0.8rem] rounded-[0.6rem] px-[1.2rem] pt-[0.6rem] pb-[0.7rem] tablet:px-[1.6rem] tablet:pt-[0.8rem] tablet:pb-[0.9rem] desktop:py-[1rem] h-[3rem] tablet:h-[3.6rem] desktop:h-[4rem]"
      >
        관리
      </Button>
      <Button
        variant="ghost"
        type="button"
        onClick={() =>
          setModal(prev => ({
            ...prev,
            name: 'inviteMember',
            status: true
          }))
        }
        prefix={
          <img
            src={addBox}
            alt="초대하기 더하기 아이콘"
            className="hidden tablet:flex"
          />
        }
        customStyles="flex justify-center items-center text-[1.4rem] desktop:text-[1.6rem] font-medium gap-[0.8rem] tablet:rounded-[0.8rem] rounded-[0.6rem] px-[1.2rem] pt-[0.6rem] pb-[0.7rem] tablet:px-[1.6rem] tablet:pt-[0.8rem] tablet:pb-[0.9rem] desktop:py-[1rem] h-[3rem] tablet:h-[3.6rem] desktop:h-[4rem]"
      >
        초대하기
      </Button>
    </div>
  );
}
