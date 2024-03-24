import unsubscribe from 'src/assets/images/unsubscribe.svg';
import search from 'src/assets/images/search.svg';
import useMyInvations from 'src/hooks/useMyInvations';
import { Invitation } from 'src/types/invitationsTypes';
import InvitationsItem from './InvitationsItem';

export default function Invitations() {
  const { data, onSubmit } = useMyInvations();
  const invitations = data?.invitations ?? [];

  return (
    <article className="flex flex-col	w-[26rem] min-h-[40rem] tablet:w-[50.7rem] desktop:w-[102.2rem] bg-white my-[4rem]">
      <header className="text-[2.4rem] font-bold pt-[3.2rem] pl-[1.6rem] tablet:pl-[2.8rem]">
        초대받은 대시보드
      </header>

      {invitations.length ? (
        <>
          <form onSubmit={onSubmit}>
            <div className="flex items-center w-[22.8rem] h-[3.6rem] border-solid border-[0.1rem] rounded-[0.6rem] ml-[1.6rem] mt-[2rem] px-[1.2rem] tablet:ml-[2.8rem] tablet:w-[44.8rem] tablet:h-[4rem] desktop:w-[96.6rem]">
              <img
                src={search}
                alt="돋보기"
                className="w-[2.2rem] h-[2.2rem]"
              />
              <input
                name="search"
                type="text"
                placeholder="검색"
                className="w-full text-[1.4rem] ml-[1rem]"
              />
            </div>
          </form>

          {invitations.map((invitation: Invitation) => (
            <InvitationsItem key={invitation.id} invitation={invitation} />
          ))}
        </>
      ) : (
        <section className="flex flex-col items-center mt-[6.7rem]">
          <img
            className="w-[10rem] h-[10rem]"
            src={unsubscribe}
            alt="초대받은 대시보드 없음"
          />
          <div className="text-[1.8rem] text-gray_9FA6B2 mt-[2.4rem]">
            아직 초대받은 대시보드가 없어요
          </div>
        </section>
      )}
    </article>
  );
}
