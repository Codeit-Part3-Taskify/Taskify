import Profile from 'src/components/Profile/Profile';
import HorizontalLine from 'src/components/Lines/HorizontalLine';
import Button from 'src/components/Buttons/Button';

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
            <Button
              variant="secondary"
              customStyles="px-[2.9rem] py-[0.7rem] rounded-[0.4rem] text-violet"
            >
              삭제
            </Button>
          </div>
          {member !== members[members.length - 1] && <HorizontalLine />}
        </>
      ))}
    </>
  );
}
