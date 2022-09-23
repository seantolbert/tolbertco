import { useCollection } from "../../hooks/useCollection";
import BirsthdayListItem from "./BirsthdayListItem";

export default function BirthdayList() {
  const { documents: people } = useCollection("people");


  return (
    <main className="" id="birthdays">
      <h3 className="text-primary text-2xl">0 Birthdays Today</h3>
      {people &&
        people.map((person) => (
          <BirsthdayListItem key={person.id} person={person} />
        ))}
    </main>
  );
}
