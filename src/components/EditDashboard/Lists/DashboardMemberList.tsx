import Profile from '@/components/Profile/Profile';
import HorizontalLine from '@/components/Lines/HorizontalLine';
import Button from '@/components/Buttons/Button';

interface DashboardMemberListProps {
  members: string[];
}

export default function DashboardMemberList({
  members
}: DashboardMemberListProps) {
  return (
    <>
      {members.map(member => (
        <>
          <div className="flex justify-between items-center px-[2.8rem] py-[1.6rem]">
            <Profile userName={member} />
            <Button variant="secondary" customStyles="px-[2.9rem] py-[0.7rem]">
              삭제
            </Button>
          </div>
          {member !== members[members.length - 1] && <HorizontalLine />}
        </>
      ))}
    </>
  );
}
