import { useCollection } from "../../hooks/useCollection";
import BirthdayCreate from "./BirthdayCreate";
import BirthdayListItem from "./BirthdayListItem";
import { useState } from "react";

export default function BirthdayList() {
  const { documents: people } = useCollection("people");
  const [showDelete, setShowDelete] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState(true);

  // grab the date 3 months from now and current date
  let laterDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
  let today = new Date();

  // extract the month of laterDate and current date in individual variables
  let laterMonth = new Date(laterDate).getMonth();
  const month = today.getMonth();

  // create new filtered list for birthdays occurring between now
  // and three months from now
  const agingPeople = people
    ? people.filter((person) => {
        let birthMonth = new Date(person.birthday).getMonth();
        return month <= birthMonth && birthMonth <= laterMonth;
      })
    : null;

  return (
    <main
      className="max-w-xl min-h-96 rounded-lg p-2 flex flex-col justify-center gap-5 group shadow-smallDark"
      id="birthdays"
    >
      <p className="text-light text-4xl font-extrabold">Birthday List</p>
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-5">
          <button
            className={`${
              showAdd ? "text-rose-300 shadow-pressedMedDark" : "text-primary"
            } font-bold transition duration-500 rounded p-2`}
            onClick={() => setShowAdd(!showAdd)}
          >
            Add
          </button>
          <button
            className={`${
              showDelete
                ? "text-rose-300 shadow-pressedMedDark"
                : "text-primary"
            } font-bold transition duration-500   rounded p-2`}
            onClick={() => setShowDelete(!showDelete)}
          >
            Delete
          </button>
        </div>
        <button
          onClick={() => setFilter(!filter)}
          className="text-primary font-bold transition duration-500 group-hover:shadow-smallDark active:shadow-pressedMedDark rounded p-2"
        >
          {filter ? "Show All" : "Next 3 months"}
        </button>
      </div>
      {showAdd && <BirthdayCreate />}

      {filter ? (
        <div className="flex flex-col gap-3 max-h-96 overflow-scroll">
          {people &&
            agingPeople.map((person) => (
              <BirthdayListItem
                key={person.id}
                person={person}
                show={showDelete}
              />
            ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 max-h-96 overflow-scroll">
          {people &&
            people.map((person) => (
              <BirthdayListItem
                key={person.id}
                person={person}
                show={showDelete}
              />
            ))}
        </div>
      )}
    </main>
  );
}
