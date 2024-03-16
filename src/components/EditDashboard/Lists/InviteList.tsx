import Button from 'src/components/Buttons/Button';

interface InviteListProps {
  invitedUsers: string[];
}

export default function InviteList({ invitedUsers }: InviteListProps) {
  return (
    <>
      {invitedUsers.map(user => (
        <>
          <div className="flex justify-between items-center px-[2.8rem] py-[1.6rem]">
            <span>{user}</span>
            <Button
              variant="secondary"
              customStyles="px-[2.9rem] py-[0.7rem] rounded-[0.4rem] text-violet"
            >
              취소
            </Button>
          </div>
          {user !== invitedUsers[invitedUsers.length - 1] && (
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
        </>
      ))}
    </>
  );
}
