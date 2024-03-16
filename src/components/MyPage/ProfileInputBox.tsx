import Button from '../Buttons/Button';

export default function ProfileBox() {
  return (
    <div>
      <form>
        <input type="file" />
        <input className="basicinput" type="text" />
        <input className="basicinput" type="text" />
        <Button
          variant="primary"
          type="button"
          customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem]"
        >
          저장
        </Button>
      </form>
    </div>
  );
}
