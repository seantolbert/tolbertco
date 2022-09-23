import { useCollection } from "../../hooks/useCollection";
import BirsthdayListItem from "./BirthdayListItem";

export default function BirthdayList() {
  const { documents: people } = useCollection("people");

  return (
    <main className="max-w-md" id="birthdays">
      <h3 className="text-primary text-2xl">
        {people ? (
          <p>{people.length} Birthdays coming up</p>
        ) : (
          <p>No Birthdays coming up</p>
        )}
      </h3>
      {people &&
        people.map((person) => (
          <BirsthdayListItem key={person.id} person={person} />
        ))}
    </main>
  );
}
