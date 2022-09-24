import BirthdayList from "../projects/Birthdays/BirthdayList";

export default function Projects() {
  return (
    <main className="p-2">
      <h1 className="text-primary text-3xl font-bold mb-10">React Demo Projects</h1>
      <div className="flex flex-wrap gap-5">
        <BirthdayList />
      </div>
    </main>
  );
}
