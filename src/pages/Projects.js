import BirthdayCreate from "../projects/Birthdays/BirthdayCreate";
import BirthdayList from "../projects/Birthdays/BirthdayList";

export default function Projects() {
  return (
    <main className="p-2">
      <h1 className="text-primary text-3xl font-bold">React Demo Projects</h1>
      <div>
        <BirthdayList />
        <BirthdayCreate />
      </div>
    </main>
  );
}
