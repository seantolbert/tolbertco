import BirthdayList from "../projects/Birthdays/BirthdayList";
import ColorList from "../projects/ColorGen/ColorList";

export default function Projects() {
  return (
    <main className="p-2">
      <h1 className="text-primary text-3xl font-bold mb-10">React Demo Projects</h1>
      <div className="flex flex-wrap gap-5 justify-center md:justify-start">
        <BirthdayList />
        <ColorList />
      </div>
    </main>
  );
}
