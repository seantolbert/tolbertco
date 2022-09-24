import { useCollection } from "../../hooks/useCollection";
import BirthdayCreate from "./BirthdayCreate";
import BirthdayListItem from "./BirthdayListItem";
import { useState } from "react";

export default function BirthdayList() {
  const { documents: people } = useCollection("people");
  const [show, setShow] = useState(false);

  let d = new Date(new Date().setMonth(new Date().getMonth() + 3));

  

  console.log(d);
  // console.log(month);

  // const filteredPeople = people.filter(())

  return (
    <main
      className="max-w-sm rounded-lg p-2 flex flex-col justify-center gap-5 group shadow-smallDark"
      id="birthdays"
    >
      <h3 className="text-primary text-2xl">
        {people ? (
          <p>{people.length} Birthdays coming up</p>
        ) : (
          <p>No Birthdays coming up</p>
        )}
      </h3>
      <div className="flex flex-col gap-3 max-h-52 overflow-scroll">
        {people &&
          people.map((person) => (
            <BirthdayListItem key={person.id} person={person} show={show} />
          ))}
      </div>
      <button
        className="text-primary font-bold transition duration-500 group-hover:shadow-smallDark active:shadow-pressedMedDark w-fit rounded p-2"
        onClick={() => setShow(!show)}
      >
        {show ? "Cancel" : "Edit"}
      </button>
      {show && <BirthdayCreate />}
    </main>
  );
}
