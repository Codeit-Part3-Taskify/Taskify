import purpleCircle from '../../assets/images/purple-circle.svg';
import setting from '../../assets/images/setting.svg';

export default function ColumnInfo() {
  return (
    <section className="flex items-center justify-between">
      <div className="flex items-center gap-[0.8rem]">
        <img
          src={purpleCircle}
          alt="보라색 원 이미지"
          className="w-[0.8rem] h-[0.8rem]"
        />
        <h2 className="text-[1.8rem] font-bold">To Do</h2>
        <span className="flex items-center justify-center rounded-[0.4rem] text-[1.2rem] font-medium text-[#787486] ml-[0.4rem] bg-[#EEE] w-[2rem] h-[2rem]">
          2
        </span>
      </div>
      <img src={setting} alt="톱니 이미지" className="cursor-pointer" />
    </section>
  );
}
