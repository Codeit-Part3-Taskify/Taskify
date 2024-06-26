import { useEffect, useState } from 'react';
import { usePagenationDashboardInvitations } from 'src/hooks/usePagenationDashboardInvitations';
import { modalAtom } from 'src/store/store';
import { useSetAtom } from 'jotai';
import AddBoxIcon from 'src/assets/images/add-box-white.svg';
import PagenationButtons from '../Buttons/PagenationButtons';
import InviteList from './Lists/InviteList';
import Button from '../Buttons/Button';

export default function InvitationSettings() {
  const {
    data,
    isLoading,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick,
    isStart,
    isEnd
  } = usePagenationDashboardInvitations();
  const setModal = useSetAtom(modalAtom);
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (!isLoading) {
      setDisplayData(data);
    }
  }, [data, isLoading]);

  return (
    <section className="tablet:pt-[2.8rem] pt-[2.4rem] pb-[0.4rem] bg-white rounded-[0.8rem]  desktop:w-[62rem] tablet:w-[54.4rem] mobile:w-[28.4rem] tablet:h-[48.5rem] h-[41rem]">
      <div className="flex items-center justify-between tablet:px-[2.8rem] px-[2rem]">
        <h1 className="tablet:text-[2.4rem] text-[2rem] font-bold">
          초대 내역
        </h1>
        <div className="flex flex-row tablet:gap-[1.6rem] relative tablet:static">
          {allPage ? (
            <PagenationButtons
              allPage={allPage}
              nowPage={nowPage}
              handleBackwardButtonClick={handleBackwardButtonClick}
              handleForwardButtonClick={handleForwardButtonClick}
              isStart={isStart}
              isEnd={isEnd}
            />
          ) : null}
          <Button
            variant="primary"
            customStyles="absolute right-0 top-[4.8rem] tablet:static tablet:gap-[0.8rem] gap-[0.6rem] tablet:px-[1.6rem] px-[1.2rem] tablet:py-[0.8rem] py-[0.7rem] tablet:text-[1.4rem] text-[1.2rem] rounded-[0.4rem]"
            prefix={
              <img
                className="tablet:w-[1.6rem] tablet:h-[1.6rem] w-[1.4rem] h-[1.4rem]"
                src={AddBoxIcon}
                alt="추가하기 박스 아이콘"
              />
            }
            onClick={() =>
              setModal(prev => ({
                ...prev,
                name: 'inviteMember',
                status: true
              }))
            }
          >
            초대하기
          </Button>
        </div>
      </div>
      <div className="tablet:text-[1.6rem] text-[1.4rem] tablet:pt-[2.8rem] pt-[1.8rem] rounded-[0.4rem]">
        <h2 className="tablet:px-[2.8rem] px-[2rem] mb-[0.8rem] text-gray_9FA6B2">
          이메일
        </h2>
        {data?.invitations.length === 0 ? (
          <div className="w-[100%] h-[30rem] flex justify-center items-center tablet:mt-0">
            <p>초대 내역이 없습니다.</p>
          </div>
        ) : (
          <InviteList
            invitations={displayData?.invitations}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        )}
      </div>
    </section>
  );
}
