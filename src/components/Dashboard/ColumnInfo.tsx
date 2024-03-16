import purpleCircle from 'src/assets/images/purple-circle.svg';
import setting from 'src/assets/images/setting.svg';

export default function ColumnInfo({ columnInfo }: { columnInfo: any }) {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-[0.8rem]">
        <img
          src={purpleCircle}
          alt="보라색 원 이미지"
          className="w-[0.8rem] h-[0.8rem]"
        />
        <h2 className="text-[1.8rem] font-bold">{columnInfo?.title}</h2>
        <span className="flex items-center justify-center rounded-[0.4rem] text-[1.2rem] font-medium text-[#787486] ml-[0.4rem] bg-[#EEE] w-[2rem] h-[2rem]">
          as
        </span>
      </div>
      <img src={setting} alt="톱니 이미지" className="cursor-pointer" />
    </section>
  );
}
