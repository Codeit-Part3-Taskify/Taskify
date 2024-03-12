export default function ColumnInfo() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[0.8rem]">
        <img
          src="/images/purple-circle.svg"
          alt="보라색 원 이미지"
          className="w-[0.8rem] h-[0.8rem]"
        />
        <h2 className="text-[1.8rem] font-bold">To Do</h2>
        <span className="text-[1.2rem] font-medium text-[#787486] ml-[0.4rem]">
          2
        </span>
      </div>
      <img src="/images/setting.svg" alt="톱니 이미지" />
    </div>
  );
}
