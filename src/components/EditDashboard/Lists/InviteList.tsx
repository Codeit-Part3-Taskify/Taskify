import HorizontalLine from '../../Lines/HorizontalLine';
import Button from '@/components/Buttons/Button';

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
            <Button variant="secondary" customStyles="px-[2.9rem] py-[0.7rem]">
              취소
            </Button>
          </div>
          {user !== invitedUsers[invitedUsers.length - 1] && <HorizontalLine />}
        </>
      ))}
    </>
  );
}
