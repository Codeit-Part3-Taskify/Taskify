import { Invitation } from 'src/types/invitationsTypes';

interface InvitationsItemProps {
  invitation: Invitation;
}

export default function InvitationsItem({ invitation }: InvitationsItemProps) {
  return (
    <section className="mt-[0.8rem]">
      <div className="border-b-[0.1rem]">
        <div className="flex flex-col gap-[1rem]">
          <div className="px-[1.6rem] text-[1.4rem] mt-[0.8rem]">
            <span className="text-gray_9FA6B2 mr-[2.8rem]">이름</span>
            <span>{invitation.dashboard.title}</span>
          </div>
          <div className="px-[1.6rem] text-[1.4rem]">
            <span className="text-gray_9FA6B2 mr-[1.6rem]">초대자</span>
            <span>{invitation.inviter.nickname}</span>
          </div>
        </div>
        <div className="p-[1.6rem] flex gap-[1rem] text-[1.2rem]">
          <button className="w-[10.9rem] h-[2.8rem] bg-violet rounded-[0.4rem] text-white">
            수락
          </button>
          <button className="w-[10.9rem] h-[2.8rem] bg-white rounded-[0.4rem] text-violet border-solid border-[0.1rem]">
            거절
          </button>
        </div>
      </div>
    </section>
  );
}
