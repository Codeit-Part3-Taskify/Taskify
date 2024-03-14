import Profile from '../../Profile/Profile';
import HorizontalLine from '../../Lines/HorizontalLine';
import SecondaryButton from '../../Buttons/SecondaryButton';

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
            <SecondaryButton className="px-[2.9rem] py-[0.7rem]">
              삭제
            </SecondaryButton>
          </div>
          {member !== members[members.length - 1] && <HorizontalLine />}
        </>
      ))}
    </>
  );
}
