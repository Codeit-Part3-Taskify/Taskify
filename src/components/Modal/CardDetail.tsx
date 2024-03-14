import kebab from 'src/assets/images/kebab.svg';
import closeBtn from 'src/assets/images/close.svg';
// 작업중
export default function CardDetail() {
  return (
    <div className="w-[73rem] h-[76.3rem] ">
      <div className="flex justify-between">
        <span className="text-[#333236] text-[2.4rem] font-bold">
          새로운 일정 관리 Taskify
        </span>
        <div className="flex gap-[2.4rem]">
          <img src={kebab} alt="케밥버튼" className="w-[2.8rem] h-[2.8rem]" />
          <img
            src={closeBtn}
            alt="닫기버튼"
            className="w-[3.2rem] h-[3.2rem]"
          />
        </div>
      </div>

      <div>
        <span>to do</span> | <span> Tags ...</span>
      </div>
      <div> Content ...</div>
      <div> Image ...</div>
      <div>댓글</div>
      <div>
        댓글 입력창<button>댓글 입력 버튼</button>
      </div>
      <div>댓글</div>
    </div>
  );
}
