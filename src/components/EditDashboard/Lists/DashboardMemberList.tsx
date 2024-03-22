import Profile from 'src/components/Profile/Profile';
import Button from 'src/components/Buttons/Button';
import { DashboardMember } from 'src/types/dashboardTypes';

interface Props {
  members: DashboardMember[] | undefined;
  handleDeleteButtonClick: (memberId: number) => void;
}

export default function DashboardMemberList({
  members,
  handleDeleteButtonClick
}: Props) {
  return (
    <div>
      {members?.map((member, index) => (
        <div>
          <div
            key={member.id}
            className="flex justify-between items-center tablet:px-[2.8rem] px-[2rem] tablet:py-[1.6rem] py-[1.2rem]"
          >
            <Profile
              profileImgSrc={member.profileImageUrl}
              userName={member.nickname}
            />
            {index !== 0 ? (
              <Button
                variant="secondary"
                type="button"
                customStyles="tablet:px-[2.9rem] px-[0.9rem] py-[0.7rem] rounded-[0.4rem] text-violet tablet:text-[1.4rem] text-[1.2rem]"
                onClick={() => handleDeleteButtonClick(member.id)}
              >
                삭제
              </Button>
            ) : null}
          </div>
          {index !== members.length - 1 && (
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
