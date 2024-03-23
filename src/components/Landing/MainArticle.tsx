import dashboard from 'src/assets/images/dashboard-page.png';
import createColumn from 'src/assets/images/create-column.png';
import OtherSections from './OtherSections';

export default function MainArticle() {
  return (
    <main className="flex flex-col justify-center items-center gap-[9rem] text-white tablet:mb-[16rem] mb-[3rem]">
      <section className="bg-black_171717 rounded-[0.8rem] desktop:max-w-[120rem] desktop:min-w-[100rem] desktop:w-[calc(100vw-72rem)] desktop:h-[60rem] tablet:max-w-[90rem] tablet:w-[calc(100vw-8rem)] w-[calc(100vw-3.2rem)]">
        <div className="flex desktop:flex-row flex-col desktop:justify-between desktop:gap-0 tablet:gap-[22rem] gap-[19.4rem] desktop:mt-[10.3rem] tablet:ml-[6rem]">
          <div className="flex flex-col tablet:items-start items-center tablet:gap-[10rem] gap-[6.1rem] tablet:mx-0 mx-[5.8rem]">
            <h1 className="tablet:text-[2.2rem] text-[1.8rem] text-gray_9FA6B2 font-medium desktop:mt-[2rem] tablet:mt-[6.3rem] mt-[6rem]">
              Point 1
            </h1>
            <p className="tablet:text-[4.8rem] text-[3.6rem] tablet:text-start text-center font-bold tablet:leading-[6.4rem] leading-[5rem]">
              일의 우선순위를
              <br /> 관리하세요
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src={dashboard}
              alt="대시보드 페이지 이미지"
              className="desktop:w-[59.4rem] max-w-[59.4rem] w-[calc(100%-4.6rem)] rounded-tl-[0.8rem] rounded-br-[0.8rem]"
            />
          </div>
        </div>
      </section>
      <section className="bg-black_171717 rounded-[0.8rem] desktop:max-w-[120rem] desktop:min-w-[100rem] desktop:w-[calc(100vw-72rem)] desktop:h-[60rem] tablet:max-w-[90rem] tablet:w-[calc(100vw-8rem)] w-[calc(100vw-3.2rem)]">
        <div className="flex desktop:flex-row flex-col-reverse desktop:gap-[10rem] tablet:gap-[24rem] gap-[19.2rem] tablet:mt-[9.8rem]">
          <div className="flex justify-center">
            <img
              src={createColumn}
              alt="할 일 생성 이미지"
              className="tablet:w-[43.6rem] max-w-[43.6rem] w-[calc(100%-12.6rem)] dekstop:ml-[10.8rem] rounded-t-[0.8rem]"
            />
          </div>
          <div className="flex flex-col tablet:items-start items-center tablet:gap-[10rem] gap-[6.1rem] tablet:ml-[6rem] desktop:ml-0">
            <h1 className="tablet:text-[2.2rem] text-[1.8rem] text-gray_9FA6B2 font-medium tablet:mt-[2.5rem] mt-[6rem]">
              Point 2
            </h1>
            <p className="tablet:text-[4.8rem] text-[3.6rem] tablet:text-start text-center font-bold tablet:leading-[6.4rem] leading-[5rem]">
              해야 할 일을
              <br /> 등록하세요
            </p>
          </div>
        </div>
      </section>
      <OtherSections />
    </main>
  );
}
