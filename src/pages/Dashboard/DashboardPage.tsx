import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA] flex">
      <Column />
      <AddColumn />
    </main>
  );
}
