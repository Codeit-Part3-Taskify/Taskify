export default function ProfileBox() {
  return (
    <div>
      <form>
        <input type="file" />
        <input className="basicinput" type="text" />
        <input className="basicinput" type="text" />
        <button type="button" className="purplebutton w-[8.4rem] h-[3.2rem] ">
          저장
        </button>
      </form>
    </div>
  );
}
