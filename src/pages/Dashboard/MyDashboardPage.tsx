import unsubscribe from 'src/assets/images/unsubscribe.svg';
import DashboardList from 'src/components/Dashboard/DashboardList';
import AddDashboard from 'src/components/Dashboard/MyDashboard/AddDashboard';

export default function MyDashboardPage() {
  return (
    <main className="p-[4rem]">
      <AddDashboard />
      <DashboardList />
      <article className="w-[102.2rem] h-[40rem] bg-white my-[4rem]">
        <header className="text-[2.4rem] font-bold pt-[3.2rem] pl-[2.8rem]">
          초대받은 대시보드
        </header>
        <section className="flex flex-col items-center mt-[6.7rem] ">
          <img
            className="w-[10rem] h-[10rem]"
            src={unsubscribe}
            alt="초대받은 대시보드 없음"
          />
          <div className="text-[1.8rem] text-gray_9FA6B2 mt-[2.4rem]">
            아직 초대받은 대시보드가 없어요
          </div>
        </section>
      </article>
    </main>
  );
}
