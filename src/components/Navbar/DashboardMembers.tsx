import useCalcVisibleMembers from 'src/hooks/useCalcVisibleMembers';
import Profile from '../Profile/Profile';

export default function DashboardMemebers() {
  const { data, visibleMembersCount, invisibleMembersCount } =
    useCalcVisibleMembers();

  return (
    <div className="flex items-center justify-end tablet:ml-[0.8rem] ml-[0.4rem] z-5">
      {data?.members.slice(0, visibleMembersCount).map((member, index) => (
        <div className="relative">
          <div
            key={member.id}
            className="relative"
            style={{
              marginRight: `${index - 10}px`,
              zIndex: index + 1
            }}
          >
            <Profile
              size="basicSize"
              profileImgSrc={member.profileImageUrl}
              userName={member.nickname}
              border="white"
              isNameVisible="invisible"
            />
          </div>
        </div>
      ))}
      {invisibleMembersCount > 0 ? (
        <div
          className="relative"
          style={{
            zIndex: visibleMembersCount + 1
          }}
        >
          <div className="bg-pink_F4D7DA rounded-full  tablet:w-[3.8rem] tablet:h-[3.8rem] w-[3.4rem] h-[3.4rem] border border-[0.2rem] border-white" />
          <span className="flex absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 tablet:text-[1.6rem] text-[1.4rem] font-medium text-red_D25B68">
            +{invisibleMembersCount}
          </span>
        </div>
      ) : null}
    </div>
  );
}
