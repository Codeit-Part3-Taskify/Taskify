import putInvitations from 'src/apis/putInvitations';
import usePutMyInvations from 'src/hooks/usePutMyInvations';
import { Invitation } from 'src/types/invitationsTypes';

interface InvitationsItemProps {
  invitation: Invitation;
}

export default function InvitationsItem({ invitation }: InvitationsItemProps) {
  const acceptInvitation = usePutMyInvations(invitation.id, true);
  const rejectInvitation = usePutMyInvations(invitation.id, false);

  return (
    <section className="mt-[0.8rem]">
      <div className="border-b-[0.1rem] tablet:flex">
        <div className="flex flex-col gap-[1rem] tablet:flex-row tablet:items-center">
          <div className="px-[1.6rem] text-[1.4rem] mt-[0.8rem] flex tablet:flex-col tablet:text-[1.6rem] tablet:m-0 tablet:gap-[2rem] tablet:px-[3rem] desktop:w-[35rem]">
            <span className="text-gray_9FA6B2 mr-[2.8rem]">이름</span>
            <span>{invitation.dashboard.title}</span>
          </div>
          <div className="px-[1.6rem] text-[1.4rem] flex tablet:flex-col tablet:text-[1.6rem] tablet:gap-[2rem] desktop:w-[35rem]">
            <span className="text-gray_9FA6B2 mr-[1.6rem]">초대자</span>
            <span>{invitation.inviter.nickname}</span>
          </div>
        </div>
        <div className="p-[1.6rem] flex gap-[1rem] text-[1.2rem] tablet:text-[1.4rem] tablet:flex-col tablet:gap-[1.5rem]">
          <span className="text-gray_9FA6B2 mobile:hidden tablet:inline-block tablet:text-[1.6rem]">
            수락 여부
          </span>
          <div className="flex gap-[1rem]">
            <button
              onClick={acceptInvitation}
              className="w-[10.9rem] h-[2.8rem] bg-violet rounded-[0.4rem] text-white tablet:w-[7.2rem] tablet:h-[3rem] desktop:w-[8.4rem] desktop:h-[3.2rem]"
            >
              수락
            </button>
            <button
              onClick={rejectInvitation}
              className="w-[10.9rem] h-[2.8rem] bg-white rounded-[0.4rem] text-violet border-solid border-[0.1rem] tablet:w-[7.2rem] tablet:h-[3rem] desktop:w-[8.4rem] desktop:h-[3.2rem]"
            >
              거절
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
