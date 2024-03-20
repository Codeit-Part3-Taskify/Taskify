import Button from 'src/components/Buttons/Button';
import { DashboardInvitation } from 'src/types/api';

interface InviteListProps {
  invitations: DashboardInvitation[] | undefined;
  handleDeleteButtonClick: (invitationId: number) => void;
}

export default function InviteList({
  invitations,
  handleDeleteButtonClick
}: InviteListProps) {
  return (
    <div>
      {invitations?.map((invitation, index) => (
        <div>
          <div
            key={invitation.id}
            className="flex justify-between items-center px-[2.8rem] py-[1.6rem]"
          >
            <span>{invitation.invitee.email}</span>
            <Button
              variant="secondary"
              customStyles="px-[2.9rem] py-[0.7rem] rounded-[0.4rem] text-violet"
              onClick={() => handleDeleteButtonClick(invitation.id)}
            >
              취소
            </Button>
          </div>
          {index !== invitations.length - 1 && (
            <svg
              width="100%"
              height="1"
              className="stroke-current text-gray_EEEEEE"
            >
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
