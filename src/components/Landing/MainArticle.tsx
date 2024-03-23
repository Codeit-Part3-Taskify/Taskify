import dashboard from 'src/assets/images/dashboard-page.png';
import createColumn from 'src/assets/images/create-column.png';
import OtherSections from './OtherSections';

export default function MainArticle() {
  return (
    <main className="flex flex-col justify-center items-center gap-[9rem] text-white mb-[16rem]">
      <section className="bg-black_171717 rounded-[0.8rem] desktop:max-w-[120rem] desktop:min-w-[100rem] desktop:w-[calc(100vw-72rem)] desktop:h-[60rem] tablet:max-w-[100rem] tablet:w-[calc(100vw-8rem)]">
        <div className="flex desktop:flex-row flex-col justify-between mt-[10.3rem]  ml-[6rem]">
          <div className="flex flex-col gap-[10rem]">
            <h1 className="text-[2.2rem] text-gray_9FA6B2 font-medium mt-[2rem]">
              Point 1
            </h1>
            <p className="text-[4.8rem] font-bold leading-[6.4rem]">
              일의 우선순위를
              <br /> 관리하세요
            </p>
          </div>
          <img
            src={dashboard}
            alt="대시보드 페이지 이미지"
            className="w-[59.4rem] rounded-tl-[0.8rem] rounded-br-[0.8rem]"
          />
        </div>
      </section>
      <section className="bg-black_171717 w-[120rem] h-[60rem] rounded-[0.8rem] desktop:max-w-[120rem] desktop:min-w-[100rem] desktop:w-[calc(100vw-72rem)] desktop:h-[60rem] tablet:max-w-[100rem] tablet:w-[calc(100vw-8rem)]">
        <div className="flex desktop:flex-row flex-col-reverse gap-[10rem] mt-[9.8rem]">
          <img
            src={createColumn}
            alt="할 일 생성 이미지"
            className="w-[43.6rem] ml-[10.8rem] rounded-t-[0.8rem]"
          />
          <div className="flex flex-col gap-[10rem]">
            <h1 className="text-[2.2rem] text-gray_9FA6B2 font-medium mt-[2.5rem]">
              Point 2
            </h1>
            <p className="text-[4.8rem] font-bold leading-[6.4rem]">
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
